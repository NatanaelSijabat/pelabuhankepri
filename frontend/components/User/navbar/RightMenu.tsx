import React from "react";
import { Avatar, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { MenuMode } from "rc-menu/lib/interface";

type Props = {
  mode?: MenuMode;
};

const RightMenu = ({ mode }: Props) => {
  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span>John Doe</span>
          </>
        }
      ></Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
