import SertifikatController from "../controllers/SertifikatController";
import BaseRoutes from "./BaseRoutes";

class SertifikatRoutes extends BaseRoutes{
    public routes(): void {
        this.router.get("/", SertifikatController.index)
        this.router.post("/", SertifikatController.create)
        this.router.get("/:id", SertifikatController.show)
        this.router.put("/:id", SertifikatController.update)
        this.router.delete("/:id", SertifikatController.delete)
    }
}

export default new SertifikatRoutes().router