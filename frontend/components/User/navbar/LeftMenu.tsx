import React from "react";
import { Menu } from "antd";
import { MenuProps } from "antd";
import Link from "next/link";
import type { MenuMode } from "rc-menu/lib/interface";
import { useIntl } from "react-intl";

type Props = {
  mode?: MenuMode;
  onKlik?: MenuProps["onClick"];
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

const LeftMenu = ({ mode, onKlik }: Props) => {
  const intl = useIntl();
  const navbar1 = intl.formatMessage({ id: "page.home.navbar1" });
  const navbar2 = intl.formatMessage({ id: "page.home.navbar2" });
  const navbar2menuitem1 = intl.formatMessage({
    id: "page.home.navbar2.sub1",
  });
  const navbar2menuitem2 = intl.formatMessage({
    id: "page.home.navbar2.sub2",
  });
  const navbar2menuitem3 = intl.formatMessage({
    id: "page.home.navbar2.sub3",
  });
  const navbar2menuitem4 = intl.formatMessage({
    id: "page.home.navbar2.sub4",
  });
  const navbar2menuitem5 = intl.formatMessage({
    id: "page.home.navbar2.sub5",
  });
  const navbar3 = intl.formatMessage({ id: "page.home.navbar3" });
  const navbar4 = intl.formatMessage({ id: "page.home.navbar4" });
  const navbar5 = intl.formatMessage({ id: "page.home.navbar5" });
  const navbar6 = intl.formatMessage({ id: "page.home.navbar6" });
  const navbar6item1 = intl.formatMessage({
    id: "page.home.navbar6.sub1",
  });
  const navbar6item2 = intl.formatMessage({
    id: "page.home.navbar6.sub2",
  });
  const navbar6item3 = intl.formatMessage({
    id: "page.home.navbar6.sub3",
  });
  const navbar6item4 = intl.formatMessage({
    id: "page.home.navbar6.sub4",
  });
  const navbar6item5 = intl.formatMessage({
    id: "page.home.navbar6.sub5",
  });
  const navbar6item6 = intl.formatMessage({
    id: "page.home.navbar6.sub6",
  });
  const navbar6item7 = intl.formatMessage({
    id: "page.home.navbar6.sub7",
  });
  const navbar7 = intl.formatMessage({ id: "page.home.navbar7" });

  const items: MenuItem[] = [
    getItem(
      <Link href="/" className="capitalize">
        {navbar1}
      </Link>,
      "1"
    ),
    getItem(<span className="capitalize">{navbar2}</span>, "sub1", null, [
      getItem(
        <Link className="capitalize" href="/tentangkami">
          {navbar2menuitem1}
        </Link>,
        "2"
      ),
      getItem(
        <Link className="capitalize" href="/sejarah">
          {navbar2menuitem2}
        </Link>,
        "3"
      ),
      getItem(
        <Link className="capitalize" href="/visidanmisi">
          {navbar2menuitem3}
        </Link>,
        "4"
      ),
      getItem(
        <Link className="capitalize" href="/strukturorganisasi">
          {navbar2menuitem4}
        </Link>,
        "5"
      ),
      getItem(
        <Link className="capitalize" href="/sertifikatdanpenghargaan">
          {navbar2menuitem5}
        </Link>,
        "6"
      ),
    ]),
    getItem(
      <Link className="capitalize" href="/produkdanlayanan">
        {navbar3}
      </Link>,
      "7"
    ),
    getItem(
      <Link className="capitalize" href="/galeri">
        {navbar4}
      </Link>,
      "8"
    ),
    getItem(
      <Link className="capitalize" href="/artikel">
        {navbar5}
      </Link>,
      "9"
    ),
    getItem(<span className="capitalize">{navbar6}</span>, "sub2", null, [
      getItem(
        <Link className="capitalize" href="/prospekpenawaranumum">
          {navbar6item1}
        </Link>,
        "10"
      ),
      getItem(
        <Link href="/laporantahun" className="capitalize">
          {navbar6item2}
        </Link>,
        "11"
      ),
      getItem(
        <Link href="/" className="capitalize">
          {navbar6item3}
        </Link>,
        "12"
      ),
      getItem(
        <Link href="/" className="capitalize">
          {navbar6item4}
        </Link>,
        "13"
      ),
      getItem(
        <Link href="/" className="capitalize">
          {navbar6item5}
        </Link>,
        "14"
      ),
      getItem(
        <Link href="/" className="capitalize">
          {navbar6item6}
        </Link>,
        "15"
      ),
      getItem(
        <Link href="/" className="capitalize">
          {navbar6item7}
        </Link>,
        "16"
      ),
    ]),
    getItem(
      <Link className="capitalize" href="/kontak">
        {navbar7}
      </Link>,
      "17"
    ),
  ];

  return (
    <>
      <Menu
        defaultSelectedKeys={["beranda"]}
        mode={mode}
        onClick={onKlik}
        items={items}
      />
    </>
  );
};

export default LeftMenu;
