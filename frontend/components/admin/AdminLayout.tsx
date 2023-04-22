import React, { PropsWithChildren } from "react";
import Sidebar from "./sidebar";
const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export default AdminLayout;
