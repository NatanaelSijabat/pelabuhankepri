import ProspekPenawaranUmumController from "../controllers/ProspekPenawaranUmumController";
import BaseRoutes from "./BaseRoutes";

class ProspekPenawaranUmumRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get("/", ProspekPenawaranUmumController.index)
        this.router.post("/", ProspekPenawaranUmumController.create)
        this.router.get("/:id", ProspekPenawaranUmumController.show)
        this.router.put("/:id", ProspekPenawaranUmumController.update)
        this.router.delete("/:id", ProspekPenawaranUmumController.delete)
    }
}

export default new ProspekPenawaranUmumRoutes().router