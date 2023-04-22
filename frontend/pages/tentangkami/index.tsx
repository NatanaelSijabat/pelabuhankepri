import Head from "next/head";
import React from "react";
import Header from "../../components/user/Header";
import { MyPage } from "../../components/types";

const Index: MyPage = () => {
  return (
    <>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA) - Tentang Kami</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Tentang Kami" background="bg-tentangkami" />
      <div className="text-4xl py-10 p-3 sm:p-20">
        <span className="text-primary mb-20">
          Sekilas <p className="text-secondary">PT Pelabuhan Kepri</p>
        </span>
        <p className="text-lg text-justify pt-6" data-aos="fade-left">
          PT. Pelabuhan Kepri (BUMD) hadir untuk menjalankan amanah
          Undang-Undang No 17 Tahun 2008 Tentang Pelayaran. Kepulauan Riau
          merupakan Provinsi yang 98% adalah perairan laut, sehingga usaha
          kepelabuhanan dan transportasi laut merupakan sektor yang sangat
          potensial untuk digali sebagai sumber Pendapatan Asli Daerah (PAD).
        </p>
        <div className="text-lg text-justify pt-2">
          <span data-aos="fade-left">Dasar Pemikiran :</span>
          <ul className="p-5 list-outside">
            <li className="list-decimal" data-aos="fade-right">
              Provinsi Kepulauan Riau adalah wilayah paling strategis di wilayah
              Barat Indonesia.
            </li>
            <li className="list-decimal list-outside" data-aos="fade-right">
              Jalur Pelayaran Selat Malaka dan Selat Singapura merupakan rute
              utama yang menghubungkan pelabuhan-pelabuhan besar dan rute minyak
              dari kawasan Eropa dan Arab menuju ke Asia Timur seperti Hong
              Kong, Taiwan, Korea, Jepang dan Rusia.
            </li>
            <li className="list-decimal list-outside" data-aos="fade-right">
              Wilayah itu memiliki kandungan minyak dan gas alam yang sangat
              kaya.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

Index.Layout = "User";
export default Index;
