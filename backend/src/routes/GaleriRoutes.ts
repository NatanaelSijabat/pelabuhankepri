import GaleriController from "../controllers/GaleriController";
import BaseRoutes from "./BaseRoutes";

class GaleriRoutes extends BaseRoutes{
    public routes(): void {
        this.router.get("/",GaleriController.index)
        this.router.post("/", GaleriController.create)
        this.router.get("/:id", GaleriController.show)
        this.router.put("/:id", GaleriController.update)
        this.router.delete("/:id", GaleriController.delete)
    }
}

export default new GaleriRoutes().router