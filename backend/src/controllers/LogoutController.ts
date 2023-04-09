import { Request, Response, NextFunction } from "express"

const db = require("../db/models")

class LogoutController {
    logout = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        const refreshToken = req.cookies.refreshToken        
        if (!refreshToken) return res.sendStatus(204)

        const user = await db.User.findAll({
            where: {
                refreshToken: refreshToken
            }
        })

        if (!user[0]) return res.sendStatus(204)
        const userId = user[0].id
        await db.User.update({
            refreshToken: null
        }, {
            where: {
                id: userId
            }
        })
        res.clearCookie("refreshToken")
        return res.sendStatus(200)
    }
}

export default new LogoutController()