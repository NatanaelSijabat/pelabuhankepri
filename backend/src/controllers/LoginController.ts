import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const db = require("../db/models")
const ACCESS_TOKEN_SECRET = "asdajhsdoi2j140jrnandas9dad9sdasd"
const REFRESH_TOKEN_SECRET = "sadmasdj4asdaskdoiuewnfiufsd9fusfsfno2980"

class LoginController {
    login = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const user = await db.User.findAll({
                where: {
                    username: req.body.username
                }
            })
            const match = await bcrypt.compare(req.body.password, user[0].password)
            if (!match) return res.status(400).json({ message: "Wrong Password" })
            const userId = user[0].id;
            const username = user[0].username
            const accessToken = jwt.sign(
                { userId, username }, ACCESS_TOKEN_SECRET, {
                expiresIn: "20s"
            })
            const refreshToken = jwt.sign(
                { userId, username }, REFRESH_TOKEN_SECRET, { expiresIn: "1d" }
            )

            await db.User.update({
                refreshToken
            }, {
                where: {
                    id: userId
                }
            })
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            })
            return res.json({ accessToken })
        } catch (error) {
           return res.status(404).json({ message: "User tidak ditemukan" });
        }
    }
}

export default new LoginController()