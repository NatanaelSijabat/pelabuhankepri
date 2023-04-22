import Head from "next/head";
import React from "react";
import Header from "../../components/user/Header";
import { MyPage } from "../../components/types";

const Index: MyPage = () => {
  return (
    <>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA) - Struktur organisasi</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Struktur organisasi" background="bg-visimisi" />
      <div className="text-4xl py-10 p-3 sm:p-20">
        <p className="text-7xl font-extrabold text-center pb-10">
          Struktur Organisasi
        </p>
        <p className="text-2xl font-extrabold text-center">Data Mana ??</p>
      </div>
    </>
  );
};

Index.Layout = "User";
export default Index;
