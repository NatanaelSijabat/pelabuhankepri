import React, { PropsWithChildren } from "react";
import Navbar from "./navbar/Index";
import Foot from "./footer/Foot";
import { Layout } from "antd";

const UserLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Layout>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
      <Foot />
    </div>
  );
};

export default UserLayout;
