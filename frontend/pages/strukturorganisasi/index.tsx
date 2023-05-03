import Head from "next/head";
import React from "react";
import Header from "../../components/user/Header";
import { MyPage } from "../../components/types";
import Struktur from "components/user/struktur";

const Index: MyPage = () => {
  return (
    <>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA) - Struktur organisasi</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Struktur organisasi" background="bg-visimisi" />
      <div className="">
        <p className="text-4xl font-extrabold text-center pb-10">
          Struktur Organisasi
        </p>
      </div>
      <Struktur />
    </>
  );
};

Index.Layout = "User";
export default Index;
