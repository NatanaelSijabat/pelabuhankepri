import LoginController from "../controllers/LoginController";
import BaseRoutes from "./BaseRoutes";

class LoginRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("/",LoginController.login)
    }
}

export default new LoginRoutes().router