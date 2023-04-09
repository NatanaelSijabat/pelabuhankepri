import IController from "./ControllerInterface";
import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt'

const saltRounds = 10;
const db = require('../db/models')

class UserController implements IController {
    index = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const data = await db.User.findAll();
        return res.send({ data });
    }

    create = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const { username, password } = req.body

        try {
            const hash = await bcrypt.hash(password, saltRounds);
            const data = await db.User.create({
                username, password: hash
            })
            return res.status(201).send({ data })
        } catch (error) {
            return res.status(500).send({ error: "Unable to create user" });
        }
    }

    show = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const { id } = req.params
        const data = await db.User.findOne({
            where: {
                id
            }
        })
        if (!data) return res.status(400).json({ message: "no data found" })

        return res.send({ status: "OKE", data });
    }

    update = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const { id } = req.params
        const data = await db.User.findOne({
            where: {
                id
            }
        })
        if (!data) return res.status(400).json({ message: "no data found" })

        const { username, password } = req.body

        await db.User.update({
            username, password
        }, {
            where: { id }
        })

        return res.status(200).json({ message: "data updated" });
    }

    delete = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const { id } = req.params
        const data = await db.User.findOne({
            where: {
                id
            }
        })
        if (!data) return res.status(400).json({ message: "no data found" })

        await db.User.destroy({ data, where: { id } })

        return res.send({ message: "Data Deleted" });
    }
}

export default new UserController()