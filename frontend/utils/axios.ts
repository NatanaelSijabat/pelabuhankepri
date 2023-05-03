import axios from "axios";

const sertifikat = axios.create({
    baseURL: process.env.API_URL + "/sertifikat",
})

const galeri = axios.create({
    baseURL: process.env.API_URL + "/galeri"
})

const artikel = axios.create({
    baseURL: process.env.API_URL + "/artikel"
})

export { sertifikat, galeri, artikel }