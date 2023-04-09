import IController from './ControllerInterface'
import { Request, Response, NextFunction } from 'express'
import crypto from 'crypto';
import fs from 'fs'
import sharp from 'sharp';

const db = require("../db/models")


class SertifikatController implements IController {
    index = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const data = await db.Sertifikat.findAll();
        return res.json({ data })
    }

    create = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { file, body: { title } } = req;

            if (!file || !file.originalname) {
                return res.status(400).json({
                    message: 'No file uploaded'
                });
            }

            if(title.length == 0){
                return res.status(400).json({
                    message : "Title Required"
                })
            }

            const imagePath = "public/sertifikat"
            if(!fs.existsSync(imagePath)){
                fs.mkdirSync(imagePath)
            }

            const imageName = file.originalname;
            const secret = '12345'
            const salt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const imageNameWithSalt = imageName + salt;
            const md5Hash = crypto.createHmac('md5', secret).update(imageNameWithSalt).digest('hex');
            const imageNameWithHash = `${md5Hash}_${imageName}`;

            // await sharp(req.file?.buffer).resize({ width: 500, height: 500 }).toFile(`public/sertifikat/${imageNameWithHash}`)

            const imagePathName = `public/sertifikat/${imageNameWithHash}`;

            fs.writeFileSync(imagePathName, file.buffer);
            const data = await db.Sertifikat.create({
                title,
                image: imageNameWithHash
            });

            return res.status(201).send({
                status: "OK",
                data,
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }

    show = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const { id } = req.params
        const data = await db.Sertifikat.findOne({
            where: {
                id
            }
        })
        if (!data) return res.status(400).json({ message: "no data found" })

        return res.send({ status: "OKE", data });
    }

    update = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { params: { id }, body: { title } } = req;

            const sertifikat = await db.Sertifikat.findByPk(id);

            if (!sertifikat) {
                return res.status(404).json({
                    message: 'Sertifikat not found'
                });
            }

            if (req.file) {
                const { file } = req;

                const imageName = file.originalname;
                const secret = '12345'
                const salt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                const imageNameWithSalt = imageName + salt;
                const md5Hash = crypto.createHmac('md5', secret).update(imageNameWithSalt).digest('hex');
                const imageNameWithHash = `${md5Hash}_${imageName}`;

                const imagePathOld = `public/sertifikat/${sertifikat.image}`
                fs.unlinkSync(imagePathOld)

                const imagePath = `public/sertifikat/${imageNameWithHash}`;
                fs.writeFileSync(imagePath, file.buffer);

                sertifikat.image = imageNameWithHash;
            }

            if (title) {
                sertifikat.title = title;
            }

            await sertifikat.save();

            return res.status(200).send({
                status: "OK",
                data: sertifikat,
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }

    delete = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const { id } = req.params
        const data = await db.Sertifikat.findOne({
            where: {
                id
            }
        })
        if (!data) return res.status(400).json({ message: "no data found" })

        const imagePathOld = `public/sertifikat/${data.image}`
        fs.unlinkSync(imagePathOld)

        await db.Sertifikat.destroy({ data, where: { id } })

        return res.send({ message: "Data Deleted" });
    }
}

export default new SertifikatController()