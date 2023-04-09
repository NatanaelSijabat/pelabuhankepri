import IController from "./ControllerInterface";
import { Request, Response, NextFunction } from "express";
import crypto from 'crypto'
import fs from 'fs'

const db = require("../db/models")

class LayananController implements IController {
    index = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const data = await db.Layanan.findAll()
            return res.json({ data })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }

    create = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { file, body: { title } } = req

            if (!file || !file.originalname) {
                return res.status(400).json({
                    message: "No Image Uploaded"
                })
            }

            if (title.length == 0) {
                return res.status(400).json({
                    message: "Title Required"
                })
            }

            const imagePath = "public/layanan"
            if (!fs.existsSync(imagePath)) {
                fs.mkdirSync(imagePath)
            }

            const imageName = file.originalname
            const secret = '09876'
            const salt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            const imageNameWithSalt = imageName + salt
            const md5Hash = crypto.createHmac('md5', secret).update(imageNameWithSalt).digest('hex')
            const imageNameWithHash = `${md5Hash}_${imageName}`
            const imagePathName = `${imagePath}/${imageNameWithHash}`


            fs.writeFileSync(imagePathName, file.buffer)
            const data = await db.Layanan.create({
                title,
                image: imageNameWithHash
            },
            )

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
        try {
            const { id } = req.params
            const data = await db.Layanan.findOne({
                where: { id }
            })

            if (!data) return res.status(400).json({ message: "No Data Found" })

            return res.json({
                status: "OKE",
                data
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    update = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { params: { id }, body: { title } } = req

            const layanan = await db.Layanan.findOne({ where: { id } })

            if (!layanan) {
                return res.status(404).json({
                    message: "No Data Found"
                })
            }

            if (req.file) {
                const { file } = req

                const imageName = file.originalname;
                const secret = '12345'
                const salt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                const imageNameWithSalt = imageName + salt;
                const md5Hash = crypto.createHmac('md5', secret).update(imageNameWithSalt).digest('hex');
                const imageNameWithHash = `${md5Hash}_${imageName}`;

                const imagePathOld = `public/layanan/${layanan.image}`
                fs.unlinkSync(imagePathOld)

                const imagePath = `public/layanan/${imageNameWithHash}`;
                fs.writeFileSync(imagePath, file.buffer);

                layanan.image = imageNameWithHash;
            }

            if (title) {
                layanan.title = title;
            }

            await layanan.save()
            return res.status(200).json({ status: "OKE", data: layanan })
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    delete = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { id } = req.params
            const data = await db.Layanan.findOne({
                where: { id }
            })
            if (!data) return res.status(400).json({ message: "No Data Found" })

            const imagePathOld = `public/layanan/${data.image}`
            fs.unlinkSync(imagePathOld)

            await db.Layanan.destroy({ data, where: { id } })
            return res.send({ message: "Data Deleted" });
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }
}

export default new LayananController()