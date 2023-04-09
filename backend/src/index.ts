import express, { Application, Request, Response } from 'express';
import { config as dotenv } from 'dotenv'
import cors from 'cors'
import helmet from 'helmet';
import morgan from 'morgan'
import compression from 'compression'
import multer from 'multer'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'

import UserRoutes from './routes/UserRoutes';
import SertifikatRoute from './routes/SertifikatRoute';
import GaleriRoutes from './routes/GaleriRoutes';
import ArtikelRoute from './routes/ArtikelRoute';
import LoginRoute from './routes/LoginRoute';
import User from './middleware/User';
import LogoutRoute from './routes/LogoutRoute';
import LayananRoute from './routes/LayananRoute';
import ProspekPenawaranUmumRoute from './routes/ProspekPenawaranUmumRoute';
import LaporanTahunRoute from './routes/LaporanTahunRoute';
import LaporanKeuanganRoute from './routes/LaporanKeuanganRoute';

class App {
    public app: Application
    public upload
    public storage

    constructor() {
        this.app = express()
        this.plugins()
        this.storage = multer.memoryStorage()
        this.upload = multer({ storage: this.storage })
        this.route()
        dotenv()
    }

    protected plugins(): void {
        this.app.use(cors({ credentials: true, origin: process.env.API_APP, methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ["Content-Type", "Authorization"] }))
        this.app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(compression())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(express.static('public'))
        this.app.use(cookieParser())
    }


    protected route(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send("test")
        })

        this.app.use("/api/users", User.verifyToken, UserRoutes);
        this.app.use("/api/sertifikat", this.upload.single('image'), SertifikatRoute)
        this.app.use("/api/galeri", this.upload.single('image'), GaleriRoutes)
        this.app.use("/api/artikel", this.upload.single("image"), ArtikelRoute)
        this.app.use("/api/layanan", this.upload.single("image"), LayananRoute)
        this.app.use("/api/prospekpenawaranumum", this.upload.single("image"), ProspekPenawaranUmumRoute)
        this.app.use("/api/laporantahun",this.upload.single("image"),LaporanTahunRoute)
        this.app.use("/api/laporankeuangan",this.upload.single("image"),LaporanKeuanganRoute)
        this.app.use("/login", LoginRoute)
        this.app.use("/logout", LogoutRoute)
    }
}

const port: number = 8000;
const app = new App().app

app.listen(port, () => {
    console.log("server up " + port);
})