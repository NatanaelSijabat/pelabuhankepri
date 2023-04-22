import Head from "next/head";
import React from "react";
import Header from "../../../components/user/Header";
import { MyPage } from "../../../components/types";

const Index: MyPage = () => {
  return (
    <>
      <Head>
        <title>
          PT PELABUHAN KEPRI (PERSERODA) - Produk dan Layanan - Pelabuhan
          Transit Container
        </title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        name="Produk dan Layanan"
        background="bg-pelabuhantransitcontainer"
      />
      <div className="text-4xl py-10 p-3 sm:p-20">
        <p className="text-7xl font-extrabold text-white bg-blurr">
          Pelabuhan Transit Container
        </p>
        <p className="text-7xl font-extrabold">Data belum ada</p>
      </div>
    </>
  );
};

Index.Layout = "User";
export default Index;
