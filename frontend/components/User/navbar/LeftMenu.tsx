import React, { useState } from "react";
import { Menu } from "antd";
import type { MenuMode } from "rc-menu/lib/interface";
import { MenuProps } from "antd";

type Props = {
  mode?: MenuMode;
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <a href="/" className="capitalize">
      beranda
    </a>,
    "1"
  ),
  getItem(<span className="capitalize">tentang kami</span>, "sub1", null, [
    getItem(
      <a className="capitalize" href="/tentangkami">
        sekilas perusahaan
      </a>,
      "2"
    ),
    getItem(
      <a className="capitalize" href="/sejarah">
        sejarah
      </a>,
      "3"
    ),
    getItem(
      <a className="capitalize" href="/visidanmisi">
        visi dan misi
      </a>,
      "4"
    ),
    getItem(
      <a className="capitalize" href="/strukturorganisasi">
        struktur organisasi
      </a>,
      "5"
    ),
    getItem(
      <a className="capitalize" href="/sertifikatdanpenghargaan">
        sertifikat & penghargaan
      </a>,
      "6"
    ),
  ]),
  getItem(
    <a className="capitalize" href="/produkdanlayanan">
      produk dan layanan
    </a>,
    "7"
  ),
  getItem(
    <a className="capitalize" href="/galeri">
      galeri
    </a>,
    "8"
  ),
  getItem(
    <a className="capitalize" href="/artikel">
      artikel
    </a>,
    "9"
  ),
  getItem(<span className="capitalize">investor relation</span>, "sub2", null, [
    getItem(<a className="capitalize">prospek penawaran umum</a>, "10"),
    getItem(<a className="capitalize">laporan tahun</a>, "11"),
    getItem(<a className="capitalize">laporan keuangan</a>, "12"),
    getItem(<a className="capitalize">informasi rups</a>, "13"),
    getItem(<a className="capitalize">informasi saham</a>, "14"),
    getItem(<a className="capitalize">informasi obligasi</a>, "15"),
    getItem(<a className="capitalize">informasi deviden</a>, "16"),
  ]),
  getItem(
    <a className="capitalize" href="/kontak">
      kontak kami
    </a>,
    "17"
  ),
];

const LeftMenu = ({ mode }: Props) => {
  const [current, setCurrent] = useState("beranda");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      defaultSelectedKeys={[current]}
      mode={mode}
      onClick={onClick}
      items={items}
      // className="px-20"
    />
  );
};

export default LeftMenu;
