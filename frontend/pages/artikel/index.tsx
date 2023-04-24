import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../components/user/Header";
import { List, Pagination } from "antd";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
import { FieldTimeOutlined } from "@ant-design/icons";
import Router from "next/router";
import { MyPage } from "../../components/types";

interface Artikel {
  id: number;
  title: string;
  createdAt: string;
  image: string;
}

interface ArtikelPageProps {
  artikelData: Artikel[];
  currentPage: number;
  totalCount: number;
  perPage: number;
}

const Index: MyPage<ArtikelPageProps> = ({
  artikelData,
  currentPage,
  totalCount,
  perPage,
}) => {
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.off("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
  }, []);

  const paginateHandle = (selectedPage: number) => {
    Router.push({
      pathname: Router.pathname,
      query: { ...Router.query, page: selectedPage },
    });
  };

  let content = null;
  if (isLoading) {
    content = <div>Loading ...</div>;
  } else {
    content = (
      <>
        <List
          itemLayout="horizontal"
          dataSource={artikelData}
          rowKey={"id"}
          renderItem={(item) => (
            <List.Item
              actions={[<Link href={`/artikel/${item.id}`}>Baca</Link>]}
            >
              <List.Item.Meta
                title={
                  <Link
                    href={`/artikel/${item.id}`}
                    className="capitalize text-xl"
                  >
                    {item.title}
                  </Link>
                }
                description={
                  <>
                    <FieldTimeOutlined />
                    {moment(item.createdAt).format("DD-MMMM-YYYY")}
                  </>
                }
              />
            </List.Item>
          )}
        />
      </>
    );
  }
  return (
    <div>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA) - Artikel</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="artikel kami" background="bg-produkdanlayanan" />
      <div className="p-6 sm:p-20">{content}</div>
      <div className="flex justify-center items-center mb-10">
        <Pagination
          current={currentPage}
          responsive={true}
          total={totalCount}
          defaultPageSize={perPage}
          onChange={paginateHandle}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const page = query.page ? parseInt(query.page.toString(), 10) : 1;
  const limit = query.limit ? parseInt(query.limit.toString(), 10) : 2;

  const res = await axios.get(
    process.env.API_URL + `/artikel?page=${page}&limit=${limit}`
  );

  return {
    props: {
      artikelData: Array.isArray(res.data.data) ? res.data.data : [],
      totalCount:
        res.data.totalCount !== undefined ? res.data.totalCount : null,
      currentPage:
        res.data.currentPage !== undefined ? res.data.currentPage : null,
      perPage: res.data.perPage,
    },
  };
};

Index.Layout = "User";
export default Index;
