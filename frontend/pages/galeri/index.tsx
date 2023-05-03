import Head from "next/head";
import React, { useState, useEffect } from "react";
import Header from "../../components/user/Header";
import CardImageWithPreview from "../../components/user/cardImageWithView";
import axios from "axios";
import Router from "next/router";

import { Pagination } from "antd";
import { MyPage } from "../../components/types";
import { galeri } from "../../utils/axios";

interface Galeri {
  id: number;
  title: string;
  image: string;
}

interface GalleryPageProps {
  galeriData: Galeri[];
  currentPage: number;
  totalCount: number;
  perPage: number;
}

const Index: MyPage<GalleryPageProps> = ({
  galeriData,
  currentPage,
  totalCount,
  perPage,
}) => {
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
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
        {galeriData.map((galeri) => (
          <div key={galeri.id} className="w-3/4 sm:w-full pt-8 sm:px-4">
            <CardImageWithPreview
              imgSrc={process.env.ImagePath + `/galeri/${galeri.image}`}
              titleName={galeri.title}
            />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA) - Galeri</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="galeri kami" background="bg-produkdanlayanan" />
      <div className="sm:gap-4 sm:py-6 grid grid-flow-row sm:grid-cols-3 justify-center items-center w-full pt-10">
        {content}
      </div>
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
  const limit = query.limit ? parseInt(query.limit.toString(), 10) : 3;

  const res = await galeri.get(`?page=${page}&limit=${limit}`);

  return {
    props: {
      galeriData: res.data.data,
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
