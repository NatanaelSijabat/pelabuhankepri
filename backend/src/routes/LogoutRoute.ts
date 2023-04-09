import LogoutController from "../controllers/LogoutController";
import BaseRoutes from "./BaseRoutes";

class LogoutRoutes extends BaseRoutes{
    public routes(): void {
        this.router.delete("/",LogoutController.logout)
    }
}

export default new LogoutRoutes().router