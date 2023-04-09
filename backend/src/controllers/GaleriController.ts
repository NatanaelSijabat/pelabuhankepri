import IController from "./ControllerInterface";
import { Request, Response, NextFunction } from "express";
import crypto from 'crypto'
import fs from 'fs'

const db = require("../db/models")

class GaleriController implements IController {
    index = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const data = await db.Galeri.findAll();
        return res.json({ data });
    }

    create = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { file, body: { title } } = req

            if (!file || !file.originalname) {
                return res.status(400).json({
                    message: "No Image Upload"
                })
            }

            if(title.length == 0){
                return res.status(400).json({
                    message : "Title Required"
                })
            }

            const imagePath = "public/galeri";
            if(!fs.existsSync(imagePath)){
                fs.mkdirSync(imagePath)
            }

            const imageName = file.originalname
            const secret = '12345'
            const salt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const imageNameWithSalt = imageName + salt;
            const md5Hash = crypto.createHmac('md5', secret).update(imageNameWithSalt).digest('hex');
            const imageNameWithHash = `${md5Hash}_${imageName}`;

            const imagePathName = `${imagePath}/${imageNameWithHash}`;

            fs.writeFileSync(imagePathName, file.buffer);
            const data = await db.Galeri.create({
                title,
                image: imageNameWithHash
            })

            return res.status(201).send({
                status: "OKE",
                data
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    show = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const { id } = req.params
        const data = await db.Galeri.findOne({
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

            const galeri = await db.Galeri.findByPk(id);

            if (!galeri) {
                return res.status(404).json({
                    message: 'Data not found'
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

                const imagePathOld = `public/galeri/${galeri.image}`
                fs.unlinkSync(imagePathOld)

                const imagePath = `public/galeri/${imageNameWithHash}`;
                fs.writeFileSync(imagePath, file.buffer);

                galeri.image = imageNameWithHash;
            }
            if (title) {
                galeri.title = title;
            }

            await galeri.save();

            return res.status(200).send({
                status: "OK",
                data: galeri,
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }

    delete = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const { id } = req.params
        const data = await db.Galeri.findOne({
            where: {
                id
            }
        })
        if (!data) return res.status(400).json({ message: "no data found" })

        const imagePathOld = `public/galeri/${data.image}`
        fs.unlinkSync(imagePathOld)

        await db.Galeri.destroy({ data, where: { id } })

        return res.send({ message: "Data Deleted" });
    }
}

export default new GaleriController()