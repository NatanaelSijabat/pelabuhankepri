import React from "react";
import Router from "next/router";
import { MyPage } from "components/types";
import { Button, Pagination, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { sertifikat } from "utils/axios";
import AddSertifikat from "./add";

const columns: ColumnsType<Sertifikat> = [
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
        src={`${process.env.ImagePath + "/sertifikat/" + `${image}`}`}
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

const index: MyPage<SertifikatPageProps> = ({
  sertifikatData,
  currentPage,
  totalCount,
  perPage,
}) => {
  const [modalAdd, setModalAdd] = React.useState(false);

  const paginateHandle = (selectedPage: number) => {
    Router.push({
      pathname: Router.pathname,
      query: { ...Router.query, page: selectedPage },
    });
  };

  const showModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  const handleAddData = () => {
    setModalAdd(!modalAdd);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModalAdd}
        className="bg-secondary mb-4"
      >
        Add
      </Button>
      <AddSertifikat
        open={modalAdd}
        onCancel={showModalAdd}
        onSubmit={handleAddData}
      />
      <Table
        bordered
        columns={columns}
        dataSource={sertifikatData}
        rowClassName={"editable-row"}
        pagination={false}
      />
      <div className="flex justify-center items-center my-10">
        <Pagination
          current={currentPage}
          responsive={true}
          total={totalCount}
          defaultPageSize={perPage}
          onChange={paginateHandle}
        />
      </div>
    </>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const page = query.page ? parseInt(query.page.toString(), 10) : 1;
  const limit = query.limit ? parseInt(query.limit.toString(), 10) : 5;
  const res = await sertifikat.get(`?page=${page}&limit=${limit}`);

  return {
    props: {
      sertifikatData: res.data.data,
      totalCount:
        res.data.totalCount !== undefined ? res.data.totalCount : null,
      currentPage:
        res.data.currentPage !== undefined ? res.data.currentPage : null,
      perPage: res.data.perPage,
    },
  };
};

index.Layout = "Admin";
export default index;
