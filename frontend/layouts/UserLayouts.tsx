import React from "react";
import Foot from "../components/User/footer/Foot";
import Navbar from "../components/User/navbar/Index";
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
