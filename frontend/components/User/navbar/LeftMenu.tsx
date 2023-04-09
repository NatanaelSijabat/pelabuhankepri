import React, { useState } from "react";
import { Menu } from "antd";
import type { MenuMode } from "rc-menu/lib/interface";
import { MenuProps } from "antd";
import Link from "next/link";

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
    <Link href="/" className="capitalize">
      beranda
    </Link>,
    "1"
  ),
  getItem(<span className="capitalize">tentang kami</span>, "sub1", null, [
    getItem(
      <Link className="capitalize" href="/tentangkami">
        sekilas perusahaan
      </Link>,
      "2"
    ),
    getItem(
      <Link className="capitalize" href="/sejarah">
        sejarah
      </Link>,
      "3"
    ),
    getItem(
      <Link className="capitalize" href="/visidanmisi">
        visi dan misi
      </Link>,
      "4"
    ),
    getItem(
      <Link className="capitalize" href="/strukturorganisasi">
        struktur organisasi
      </Link>,
      "5"
    ),
    getItem(
      <Link className="capitalize" href="/sertifikatdanpenghargaan">
        sertifikat & penghargaan
      </Link>,
      "6"
    ),
  ]),
  getItem(
    <Link className="capitalize" href="/produkdanlayanan">
      produk dan layanan
    </Link>,
    "7"
  ),
  getItem(
    <Link className="capitalize" href="/galeri">
      galeri
    </Link>,
    "8"
  ),
  getItem(
    <Link className="capitalize" href="/artikel">
      artikel
    </Link>,
    "9"
  ),
  getItem(<span className="capitalize">investor relation</span>, "sub2", null, [
    getItem(
      <Link className="capitalize" href="/">
        prospek penawaran umum
      </Link>,
      "10"
    ),
    getItem(
      <Link href="/" className="capitalize">
        laporan tahun
      </Link>,
      "11"
    ),
    getItem(
      <Link href="/" className="capitalize">
        laporan keuangan
      </Link>,
      "12"
    ),
    getItem(
      <Link href="/" className="capitalize">
        informasi rups
      </Link>,
      "13"
    ),
    getItem(
      <Link href="/" className="capitalize">
        informasi saham
      </Link>,
      "14"
    ),
    getItem(
      <Link href="/" className="capitalize">
        informasi obligasi
      </Link>,
      "15"
    ),
    getItem(
      <Link href="/" className="capitalize">
        informasi deviden
      </Link>,
      "16"
    ),
  ]),
  getItem(
    <Link className="capitalize" href="/kontak">
      kontak kami
    </Link>,
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
    />
  );
};

export default LeftMenu;
