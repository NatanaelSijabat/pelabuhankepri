import BaseRoutes from './BaseRoutes';

//controller
import UserController from '../controllers/UserController';

import User from '../middleware/User';


class UsersRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get("/", UserController.index)
        this.router.post("/",User.validateRegister, UserController.create)
        this.router.get("/:id", UserController.show)
        this.router.put("/:id", UserController.update)
        this.router.delete("/:id", UserController.delete)
    }
}

export default new UsersRoutes().router
