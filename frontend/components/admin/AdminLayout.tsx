import React, { PropsWithChildren } from "react";
import Sidebar from "./drawer";
const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
};

export default AdminLayout;
