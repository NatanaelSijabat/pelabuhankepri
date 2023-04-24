import AdminLayout from "./admin/AdminLayout";
import LoginLayout from "./admin/LoginLayout";
import UserLayout from "./user/UserLayout";

export const Layouts = {
  User: UserLayout,
  Admin: AdminLayout,
  Login: LoginLayout,
};

export type LayoutsKeys = keyof typeof Layouts;
