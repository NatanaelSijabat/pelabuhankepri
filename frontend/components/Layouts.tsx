import AdminLayout from "./admin/AdminLayout";
import UserLayout from "./user/UserLayout";

export const Layouts = {
  User: UserLayout,
  Admin: AdminLayout,
};

export type LayoutsKeys = keyof typeof Layouts;
