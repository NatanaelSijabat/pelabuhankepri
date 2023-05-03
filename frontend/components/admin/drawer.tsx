import React, { PropsWithChildren, useState } from "react";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <Link href={"/admin"} className="capitalize">
      home
    </Link>,
    "1",
    <PieChartOutlined />
  ),
  getItem(
    <Link href={"/admin/sertifikatdanpenghargaan"} className="capitalize">
      sertifikat dan penghargaan
    </Link>,
    "2",
    <FileImageOutlined />
  ),
  getItem(
    <Link href={"/admin/galeri"} className="capitalize">
      galeri
    </Link>,
    "3",
    <FileImageOutlined />
  ),
  getItem(
    <Link href={"/admin/artikel"} className="capitalize">
      artikel
    </Link>,
    "4",
    <FileImageOutlined />
  ),
  getItem(
    <span className="capitalize">investor relation</span>,
    "sub1",
    <UserOutlined />,
    [
      getItem(
        <Link href={"/admin/prospekpenawaranumum"} className="capitalize">
          prospek penawaran umum
        </Link>,
        "5",
        <FileOutlined />
      ),
      getItem(
        <Link href="/admin/laporantahun" className="capitalize">
          laporan tahun
        </Link>,
        "6"
      ),
      getItem(
        <Link href="/admin/laporankeuangan" className="capitalize">
          laporan keuangan
        </Link>,
        "7"
      ),
      getItem(
        <Link href="/admin/informasirups" className="capitalize">
          informasi rups
        </Link>,
        "8"
      ),
      getItem(
        <Link href="/admin/informasisaham" className="capitalize">
          informasi saham
        </Link>,
        "9"
      ),
      getItem(
        <Link href="/admin/informasiobligasi" className="capitalize">
          informasi obligasi
        </Link>,
        "10"
      ),
      getItem(
        <Link href="/admin/informasideviden" className="capitalize">
          informasi deviden
        </Link>,
        "11"
      ),
    ]
  ),
];

const Sidebar = ({ children }: PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        // breakpoint="lg"
        // collapsedWidth={"0"}
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Content style={{ overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
