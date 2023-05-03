import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import bodyParser from 'body-parser'

 const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const jsonParser = bodyParser.json()
        jsonParser(req, res, async () => {
            if (req.method !== 'POST') throw new Error(`Method ${req.method} not allowed`);

            const { email, password } = req.body

            const response = await axios.post(process.env.auth + "/login", {
                email, password
            })

            const expiredDate = new Date()
            expiredDate.setDate(expiredDate.getDate() + 1)

            const maxAge = Math.floor((expiredDate.getTime() - new Date().getTime()) / 1000)

            res.setHeader('Set-Cookie', `token=${response.data.data.token};Max-Age=${maxAge};Expires=${expiredDate.toISOString()};HttpOnly; Path=/`)

            return res.status(200).json(response.data)
        })

    } catch (error: any) {
        return res.status(400).json({
            status: error.message
        })
    }
}

export default handler