import Head from "next/head";
import React, { useState, useEffect } from "react";
import Header from "../../components/user/Header";
import CardImageWithPreview from "../../components/user/cardImageWithView";
import Router from "next/router";
import axios from "axios";
import { Pagination } from "antd";
import { MyPage } from "../../components/types";

interface Sertifikat {
  id: number;
  title: string;
  image: string;
}

interface SertifikatPageProps {
  sertifikatData: Sertifikat[];
  currentPage: number;
  totalCount: number;
  perPage: number;
}

const Index: MyPage<SertifikatPageProps> = ({
  sertifikatData,
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
        {sertifikatData.map((sertifikat) => (
          <div className="sm:w-full sm:px-4 pb-8" key={sertifikat.id}>
            <CardImageWithPreview
              imgSrc={process.env.ImagePath + `/sertifikat/${sertifikat.image}`}
              titleName={sertifikat.title}
            />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <Head>
        <title>
          PT PELABUHAN KEPRI (PERSERODA) - Sertifikat dan Penghargaan
        </title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        name="sertifikat dan Penghargaan"
        background="bg-produkdanlayanan"
      />
      <div className="sm:gap-4 sm:py-6 grid grid-flow-row sm:grid-cols-3 justify-center items-center w-full pb-10 pt-20">
        {content}
      </div>
      <div className="flex justify-center items-center mb-10">
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
  const res = await axios.get(
    process.env.API_URL + `/sertifikat?page=${page}&limit=${limit}`
  );

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

Index.Layout = "User";
export default Index;
