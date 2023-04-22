import Head from "next/head";
import React from "react";
import Header from "../../../components/user/Header";
import { MyPage } from "../../../components/types";

const Index: MyPage = () => {
  return (
    <>
      <Head>
        <title>
          PT PELABUHAN KEPRI (PERSERODA) - Produk dan Layanan - Pemanduan dan
          Penundaan Kapal
        </title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        name="Pemanduan dan
          Penundaan Kapal"
        background="bg-labuhjangkar"
      />
      <div className="text-4xl py-10 p-3 sm:p-20">
        <p className="text-3xl font-extrabold text-secondary">
          Pemanduan dan Penundaan Kapal
        </p>
        <div className="pt-2">
          <p className="text-justify text-sm pt-5">
            Kegiatan pemanduan dan penundaan merupakan layanan yang dilakukan
            pada kapal saat akan tiba dan berangkat dari pelabuhan di perairan
            wajib pandu maupun perairan pandu luar biasa yang terkait dengan
            aspek keamanan dan keselamatan. Saat ini PT. Pelabuhan Kepri sedang
            mempersiapkan diri guna menjadi BUP yang memiliki izin pelimpahan
            pemanduan dan penundaan sehingga bisa melaksanakan kegiatan tersebut
            di wilayah nya sendiri.
          </p>
        </div>
      </div>
    </>
  );
};

Index.Layout = "User";
export default Index;
