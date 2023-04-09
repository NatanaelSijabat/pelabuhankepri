import Head from "next/head";
import React from "react";
import Header from "../../../components/User/Header";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          PT PELABUHAN KEPRI (PERSERODA) - Produk dan Layanan - Electric Vehicle
          and Vessel
        </title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Electric Vehicle and Vessel" background="bg-labuhjangkar" />
      <div className="text-4xl py-10 p-3 sm:p-20">
        <p className="text-3xl font-extrabold text-secondary">
          Electric Vehicle and Vessel
        </p>
        <div className="pt-6">
          <p className="text-3xl font-extrabold">Data belum ada</p>
        </div>
      </div>
    </>
  );
}
