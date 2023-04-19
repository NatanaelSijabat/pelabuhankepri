import Head from "next/head";
import React from "react";
import Header from "../../components/User/Header";

const Index = () => {
  return (
    <>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA) - Prospek Penawaran Umum</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="prospek penawaran umum" background="bg-produkdanlayanan" />
      <div className="p-20">
        <p>Prospek </p>
      </div>
    </>
  );
};

export default Index;
