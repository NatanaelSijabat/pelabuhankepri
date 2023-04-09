import LaporanKeuanganController from "../controllers/LaporanKeuanganController";
import BaseRoutes from "./BaseRoutes";

class LaporanKeuanganRoute extends BaseRoutes{
    public routes(): void {
        this.router.get("/",LaporanKeuanganController.index)
        this.router.post("/",LaporanKeuanganController.create)
        this.router.get("/:id",LaporanKeuanganController.show)
        this.router.put("/:id",LaporanKeuanganController.update)
        this.router.delete("/:id",LaporanKeuanganController.delete)
    }
}

export default new LaporanKeuanganRoute().router