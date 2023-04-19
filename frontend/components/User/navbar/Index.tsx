import { Button, Drawer, Layout } from "antd";
import React, { useState } from "react";
import LeftMenu from "./LeftMenu";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <Layout>
      <Layout.Header className="fixed flex flex-row z-50 w-full bg-white p-0 ">
        <div className="float-left pl-10">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="image"
              width={250}
              height={100}
              quality={100}
            />
          </Link>
        </div>
        <div className="hidden sm:block sm:w-full sm:pl-28">
          <LeftMenu mode={"horizontal"} />
        </div>
        <div className="float-right block sm:hidden pl-10">
          <Button type="text" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
        </div>
        <Drawer
          title={"PT Pelabuhan Kepri"}
          placement="right"
          closable
          onClose={showDrawer}
          open={visible}
        >
          <LeftMenu mode={"inline"} onKlik={showDrawer} />
        </Drawer>
      </Layout.Header>
    </Layout>
  );
};

export default Navbar;
