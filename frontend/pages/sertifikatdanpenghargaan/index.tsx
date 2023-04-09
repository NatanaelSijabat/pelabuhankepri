import Head from "next/head";
import React from "react";
import Header from "../../components/User/Header";
import { Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import CardImageWithPreview from "../../components/User/cardImageWithView";

export default function Index() {
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
      <div className="grid grid-flow-row sm:grid-cols-3 gap-4 p-10 sm:px-20">
        <CardImageWithPreview
          imgSrc="/sertifikat.jpg"
          titleName="ini contoh title"
        />
        <CardImageWithPreview
          imgSrc="/sertifikat.jpg"
          titleName="ini contoh title"
        />
        <CardImageWithPreview
          imgSrc="/sertifikat.jpg"
          titleName="ini contoh title"
        />
        <CardImageWithPreview
          imgSrc="/sertifikat.jpg"
          titleName="ini contoh title"
        />
        <CardImageWithPreview
          imgSrc="/sertifikat.jpg"
          titleName="ini contoh title"
        />
        <CardImageWithPreview
          imgSrc="/sertifikat.jpg"
          titleName="ini contoh title"
        />
      </div>
    </>
  );
}
