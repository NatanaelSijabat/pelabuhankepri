import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const ACCESS_TOKEN_SECRET = "asdajhsdoi2j140jrnandas9dad9sdasd"
class User {
    validateRegister = (req: Request, res: Response, next: NextFunction) => {
        if (!req.body.username || req.body.username.length < 3) {
            return res.status(400).send({
                message: "Please Enter a username with min 3 characters"
            })
        }

        if (!req.body.password || req.body.password.length < 6) {
            return res.status(400).send({
                msg: 'Please enter a password with min. 6 password'
            });
        }

        if (
            !req.body.password_repeat ||
            req.body.password != req.body.password_repeat
        ) {
            return res.status(400).send({
                msg: 'Both passwords must match'
            });
        }
        next();
    }

    verifyToken = (req:Request,res:Response,next:NextFunction) => {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]
        if(token == null) return res.sendStatus(401)
        jwt.verify(token,ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err) return res.sendStatus(403)
            req.body.username = decoded
            next()
        })
    }
}

export default new User()