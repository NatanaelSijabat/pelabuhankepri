import LayananController from "../controllers/LayananController";
import BaseRoutes from "./BaseRoutes";

class LayananRoutes extends BaseRoutes{
    public routes(): void {
        this.router.get("/",LayananController.index)
        this.router.post("/",LayananController.create)
        this.router.get("/:id",LayananController.show)
        this.router.put("/:id",LayananController.update)
        this.router.delete("/:id",LayananController.delete)
    }
}

export default new LayananRoutes().router