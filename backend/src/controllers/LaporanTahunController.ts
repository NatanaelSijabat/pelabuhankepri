import { Request, Response, NextFunction } from "express";
import IController from "./ControllerInterface";
import fs from 'fs'
import crypto from 'crypto'

const db = require("../db/models")
class LaporanTahunController implements IController {
    index = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const data = await db.LaporanTahun.findAll()
            return res.json({ data })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    create = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { file, body: { title } } = req

            if (!file || !file.originalname) {
                return res.status(400).json({
                    message: "No Image Upload"
                })
            }

            if (title.length == 0) {
                return res.status(400).json({
                    message: "Title Required"
                })
            }

            const imagePath = "public/LaporanTahun";
            if (!fs.existsSync(imagePath)) {
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
            const data = await db.LaporanTahun.create({
                title,
                image: imageNameWithHash
            })

            return res.status(201).json({
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
        try {
            const { id } = req.params
            const data = await db.LaporanTahun.findOne({
                where: { id }
            })
            if (!data) return res.status(400).json({ message: "Data Not Found" })

            return res.json({ status: "OKE", data })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    update = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { params: { id }, body: { title } } = req

            const data = await db.LaporanTahun.findOne({ where: { id } })
            if (!data) return res.status(404).json({ message: "Data Not Found" })

            if (req.file) {
                const { file } = req;

                const imageName = file.originalname;
                const secret = '12345'
                const salt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                const imageNameWithSalt = imageName + salt;
                const md5Hash = crypto.createHmac('md5', secret).update(imageNameWithSalt).digest('hex');
                const imageNameWithHash = `${md5Hash}_${imageName}`;

                const imagePathOld = `public/LaporanTahun/${data.image}`
                fs.unlinkSync(imagePathOld)

                const imagePath = `public/LaporanTahun/${imageNameWithHash}`;
                fs.writeFileSync(imagePath, file.buffer);

                data.image = imageNameWithHash;
            }
            if (title) {
                data.title = title;
            }

            await data.save()
            return res.status(200).json({
                status: "OKE",
                data
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }

    delete = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { id } = req.params
            const data = await db.LaporanTahun.findOne({ where: { id } })
            if (!data) return res.status(400).json({ message: "Data Not Found" })

            const imagePathOld = `public/LaporanTahun/${data.image}`
            fs.unlinkSync(imagePathOld)

            await db.LaporanTahun.destroy({ data, where: { id } })
            return res.json({ message: "Data Deleted" })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }
}

export default new LaporanTahunController()