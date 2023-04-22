import React from "react";
import Foot from "../components/user/footer/Foot";
import Navbar from "../components/user/navbar/Index";
import { Layout } from "antd";

type UserLayoutProps = {
  children: React.ReactNode;
};

export default function UserLayouts({ children }: UserLayoutProps) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Layout>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
      <Foot />
    </div>
  );
}
