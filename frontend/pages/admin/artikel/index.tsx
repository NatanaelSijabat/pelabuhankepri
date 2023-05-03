import React from "react";
import { MyPage } from "components/types";
import type { ColumnsType } from "antd/es/table";
import { Button, Pagination, Popconfirm, Space, Table } from "antd";
import { artikel } from "utils/axios";
import Router from "next/router";
import AddArtikel from "./add";

const Index: MyPage<ArtikelPageProps> = ({
  artikelData,
  currentPage,
  totalCount,
  perPage,
}) => {
  const [data, setData] = React.useState<Artikel[]>(artikelData);

  const handleDelete = () => {
    console.log("deleted");
  };

  const columns: ColumnsType<Artikel> = [
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
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={`${process.env.ImagePath + "/artikel/" + `${image}`}`}
          alt="image"
          width={100}
          height={100}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record, index) =>
        artikelData.length >= 1 ? (
          <Popconfirm title="Sure to delete ? " onConfirm={handleDelete}>
            <a>delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const [modalAdd, setModalAdd] = React.useState(false);

  const showModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  const handleSubmit = async () => {
    showModalAdd();
  };

  const paginateHandle = (selectedPage: number) => {
    Router.push({
      pathname: Router.pathname,
      query: { ...Router.query, page: selectedPage },
    });
  };
  return (
    <>
      <Button
        type="primary"
        className="mb-4 bg-secondary"
        onClick={showModalAdd}
      >
        Add
      </Button>
      <AddArtikel
        open={modalAdd}
        onCancel={showModalAdd}
        onSubmit={handleSubmit}
      />
      <Table columns={columns} dataSource={data} bordered />
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
  const res = await artikel.get(`?page=${page}&limit=${limit}`);
  return {
    props: {
      artikelData: res.data.data,
      totalCount:
        res.data.totalCount !== undefined ? res.data.totalCount : null,
      currentPage:
        res.data.currentPage !== undefined ? res.data.currentPage : null,
      perPage: res.data.perPage,
    },
  };
};

Index.Layout = "Admin";
export default Index;
