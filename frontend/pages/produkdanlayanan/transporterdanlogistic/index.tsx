import Head from "next/head";
import React from "react";
import Header from "../../../components/user/Header";
import { MyPage } from "../../../components/types";

const Index: MyPage = () => {
  return (
    <>
      <Head>
        <title>
          PT PELABUHAN KEPRI (PERSERODA) - Produk dan Layanan - Transporter dan
          Logistic
        </title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        name="Transporter dan
          Logistic"
        background="bg-labuhjangkar"
      />
      <div className="text-4xl py-10 p-3 sm:p-20">
        <p className="text-3xl font-extrabold text-secondary">
          Transporter dan Logistic
        </p>
        <div className="pt-6">
          <p className="text-3xl font-extrabold capitalize">
            Transportasi laut
          </p>
          <p className="text-sm pt-2 text-justify">
            Transportasi laut adalah alat transportasi yang lazim beroperasi di
            lautan. Transportasi laut sendiri punya beragam fungsi. Tergantung
            dari jenis transportasi laut itu sendiri. Di Indonesia, terdapat
            beberapa jenis dari transportasi laut. Saat ini PT. Pelabuhan Kepri
            sedang mengoperasikan satu kapal Passenger Vessel ( Kapal Penumpang
            ) yaitu MV Lintas Kepri dengan rute Tujuan, Tanjungpinang menuju
            pulau pulau di Kabuaten Lingga Provinsi Kepulauan Riau.
          </p>
        </div>
        <div className="pt-10">
          <p className="capitalize font-extrabold text-3xl">logistik</p>
          <p className="text-justify text-sm pt-2">
            seni dan ilmu, barang, energi, informasi, dan sumber daya lainnya,
            seperti produk, jasa, dan manusia, dari sumber produksi ke pasar
            dengan tujuan mengoptimalkan penggunaan modal . Manufaktur dan
            marketing akan sulit dilakukan tanpa dukungan logistik. Logistik
            juga mencakup integrasi informasi, transportasi, inventori,
            pergudangan, reverse logistics dan pemaketan.
          </p>
        </div>
      </div>
    </>
  );
};

Index.Layout = "User";
export default Index;
