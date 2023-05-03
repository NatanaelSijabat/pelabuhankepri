import React from "react";
import { MyPage } from "components/types";
import type { ColumnsType } from "antd/es/table";
import { Button, Space, Table } from "antd";
import { galeri } from "utils/axios";

interface Galeri {
  key: string;
  title: string;
  image: string;
}

interface GaleriPageProps {
  galeriData: Galeri[];
}

const columns: ColumnsType<Galeri> = [
  {
    title: "No",
    dataIndex: "index",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      <img
        src={`${process.env.ImagePath + "/galeri/" + `${image}`}`}
        alt="image"
        width={100}
        height={100}
      />
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const index: MyPage<GaleriPageProps> = ({ galeriData }) => {
  return (
    <div>
      <Button type="primary" className="mb-4 bg-primary">
        Add a row
      </Button>
      <Table bordered columns={columns} dataSource={galeriData} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await galeri.get("");
  return {
    props: {
      galeriData: res.data.data,
    },
  };
};

index.Layout = "Admin";
export default index;
