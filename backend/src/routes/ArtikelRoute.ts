import ArtikelController from "../controllers/ArtikelController";
import BaseRoutes from "./BaseRoutes";

class ArtikelRoutes extends BaseRoutes{
    public routes(): void {
        this.router.get("/",ArtikelController.index)
        this.router.post("/",ArtikelController.create)
        this.router.get("/:id",ArtikelController.show)
        this.router.put("/:id",ArtikelController.update)
        this.router.delete("/:id",ArtikelController.delete)
    }
}

export default new ArtikelRoutes().router