import { Button, Drawer, Layout, Space, Switch } from "antd";
import React, { useState } from "react";
import LeftMenu from "./LeftMenu";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = (dir: any) => {
  const locales: string[] = useRouter().locales!;
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
        <div className="hidden sm:block sm:w-full">
          <Space direction="horizontal">
            <div className="sm:pl-20">
              <LeftMenu mode={"horizontal"} />
            </div>
            {/* <Switch
              className="sm:ml-20"
              checkedChildren={"IND"}
              unCheckedChildren={"EN"}
              defaultChecked
            /> */}
            <div>
              {[...locales].sort().map((locale: string) => (
                <Link key={locale} href="/" locale={locale}>
                  <div>{locale}</div>
                </Link>
              ))}
            </div>
          </Space>
        </div>
        <div className="float-right block sm:hidden sm:w-full pl-10">
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
