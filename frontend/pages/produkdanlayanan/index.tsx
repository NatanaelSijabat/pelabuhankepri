import Head from "next/head";
import React from "react";
import Header from "../../components/user/Header";
import CardImage from "../../components/user/cardImage";
import { MyPage } from "../../components/types";

const Index: MyPage = () => {
  return (
    <>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA) - Produk dan Layanan</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Produk dan Layanan" background="bg-produkdanlayanan" />
      <div className="grid grid-flow-row sm:grid-cols-3 gap-4 p-10 sm:px-20">
        <CardImage
          titleName="Pelabuhan Transit Container"
          imgName="/pelabuhan.jpg"
          href="/produkdanlayanan/pelabuhantransitcontainer"
        />
        <CardImage
          titleName="Labuh Jangkar dan Floating Storage"
          imgName="/labuh-jangkar.jpg"
          href="/produkdanlayanan/labuhjangkardanfloatingstorage"
        />
        <CardImage
          titleName="Pemanduan dan Penundaan Kapal"
          imgName="/pelabuhan.jpg"
          href="/produkdanlayanan/pemanduandanpenundaankapal"
        />
        <CardImage
          titleName="Transporter dan Logistic"
          imgName="/pelabuhan.jpg"
          href="/produkdanlayanan/transporterdanlogistic"
        />
        <CardImage
          titleName="Electric Vehicle and Vessel"
          imgName="/pelabuhan.jpg"
          href="/produkdanlayanan/electricvehicleandvessel"
        />
        <CardImage
          titleName="Shipyard and Bunkering"
          imgName="/pelabuhan.jpg"
          href="/produkdanlayanan/shipyardandbunkering"
        />
      </div>
    </>
  );
};

Index.Layout = "User";
export default Index;
