import Head from "next/head";
import React from "react";
import Header from "../../../components/User/Header";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          PT PELABUHAN KEPRI (PERSERODA) - Produk dan Layanan - Labuh Jangkar
          dan Floating Storage
        </title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Produk dan Layanan" background="bg-labuhjangkar" />
      <div className="text-4xl py-10 p-3 sm:p-20">
        <p className="text-3xl font-extrabold text-secondary">
          Labuh Jangkar dan Floating Storage
        </p>
        <div className="pt-6">
          <p className="text-4xl font-extrabold">Labuh Jangkar</p>
          <p className="text-3xl font-extrabold">Data belum ada</p>
        </div>
        <div className="pt-10">
          <p className="capitalize font-extrabold text-3xl">floating storage</p>
          <p className="text-justify text-sm pt-5">
            FSO (Floating Storage & Offloading), merupakan suatu bangunan
            terapung/kapal yang digunakan sebagai tempat untuk menyimpan crude
            oil. Crude oil ini biasanya dari FPS atau FPU yang ditransfer ke FSO
            melalui sistem submerged turret loading (STL), kemudian di
            export/offload ke shelter tanker melalui flexible hoses pada bagian
            belakang FSO. Saat ini PT. Pelabuhan Kepri telah memiliki kerjasama
            dengan beberapa perusahaan yang akan meletakkan FSO di wilayah labuh
            jangkar Kabil dan Tanjung Berakit dan nantinya FSO ini tidak hanya
            untuk oil namun juga untuk gas.
          </p>
        </div>
      </div>
    </>
  );
}
