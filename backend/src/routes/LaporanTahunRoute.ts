import LaporanTahunController from "../controllers/LaporanTahunController";
import BaseRoutes from "./BaseRoutes";

class LaporanTahunRoute extends BaseRoutes{
    public routes(): void {
        this.router.get("/",LaporanTahunController.index)
        this.router.post("/",LaporanTahunController.create)
        this.router.get("/:id",LaporanTahunController.show)
        this.router.put("/:id",LaporanTahunController.update)
        this.router.delete("/:id",LaporanTahunController.delete)
    }
}

export default new LaporanTahunRoute().router