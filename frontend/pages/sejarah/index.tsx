import Head from "next/head";
import React from "react";
import Header from "../../components/user/Header";
import { MyPage } from "../../components/types";

const Index: MyPage = () => {
  return (
    <>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA) - Sejarah</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Sejarah" background="bg-sejarah" />
      <div className="text-4xl py-10 p-3 sm:p-20">
        <span className="text-primary mb-20">
          Sejarah <p className="text-secondary">PT Pelabuhan Kepri</p>
        </span>
        <p className="text-lg text-justify pt-6" data-aos="fade-left">
          Dasar pembentukan Badan Usaha Pelabuhan PT. Pelabuhan Kepri adalah
          Peraturan Daerah Provinsi Kepulauan Riau Nomor 2 Tahun 2013 tanggal 25
          April 2013 tentang Pembentukan Badan Usaha Pelabuhan PT Pelabuhan
          Kepri pendirian badan hukum perseroan PT. Pelabuhan Kepri berdasarkan
          Akta Notaris MUSLIM, SH Nomor : 39 Tanggal 29 November 2013 dan
          Keputusan Menteri Hukum dan Hak Asasi Manusia Nomor
          AHU-04958.AH.01.01.Tahun 2014 Tentang Pengesahan Badan Hukum Perseroan
          Tanggal 06 Februari 2014.
        </p>
        <div className="text-lg text-justify pt-2" data-aos="fade-right">
          Arahan strategis Badan Usaha Milik Daerah PT. Pelabuhan Kepri secara
          korporat adalah menjadi entitas korporasi yang secara sehat secara
          finansial sehingga dapat melakukan investasi dalam rangka menciptakan
          keunggulan bersaing guna keberlangsungan usaha sesuai kaidah – kaidah
          korporasi. Disamping kondisi keuangan yang sehat, Badan Usaha Milik
          Daerah PT. Pelabuhan Kepri juga harus efisien dan dapat memenuhi
          tingkat keandalan dan pelayanan sesuai ekspektasi pelanggan dan
          didukung oleh merangkul Sumber Daya Manusia yang memiliki kompetensi
          tinggi dan berperilaku sesuai tata kelola perusahaan dalam menjalankan
          usahanya.
        </div>
        <div className="text-lg text-justify pt-2">
          <span className="pl-4" data-aos="fade-left">
            Arahan strategis (strategic direction) adalah sebagai berikut:
          </span>
          <ul className="list-outline pl-5">
            <li className="list-decimal" data-aos="fade-right">
              Meningkatkan kapasitas produksi melalui skema investasi alat
              produksi dan partnership (kerjasama operasi).
            </li>
            <li className="list-decimal" data-aos="fade-right">
              Melakukan pengembangan pasar baik domestik maupun internasional.
            </li>
            <li className="list-decimal" data-aos="fade-right">
              Meningkatkan kinerja perusahaan dengan melakukan penataan
              keuangan, Sumber Daya Manusia dan operasional dalam rangka
              meningkatkan ketersediaan, kehandalan, dan efisiensi pengelolaan
              pelabuhan.
            </li>
          </ul>
        </div>
        <div className="text-lg text-justify pt-2">
          <span className="pl-4" data-aos="fade-left">
            Untuk dapat mewujudkan tercapainya sasaran strategis Badan Usaha
            Milik Daerah secara korporat melakukan penyelarasan terhadap
            strategi fungsional. Adapun yang dilakukan perusahaan adalah sebagai
            berikut :
          </span>
          <ul className="pl-5 list-outside">
            <li className="list-decimal" data-aos="fade-right">
              Meningkatkan kapasitas produksi dengan peningkatan ketersediaan
              alat produksi dan fasilitas pelabuhan baik melaui skema investasi,
              kemitraan maupun optimalisasi asset perusahaan.
            </li>
            <li className="list-decimal" data-aos="fade-right">
              Meningkatkan utilisasi alat produksi dengan mengembangkan pasar
              baik domestik maupun internasional
            </li>
          </ul>
        </div>
        <div className="text-lg text-justify pt-2">
          <span className="pl-4" data-aos="fade-left">
            Perencanaan Bisnis Kedepan PT. Pelabuhan Kepri meliputi beberapa
            kegiatan sebagia berikut :
          </span>
          <ul className="list-decimal pl-5">
            <li className="list-decimal" data-aos="fade-right">
              Pelayanan Jasa Pemanduan dan Penundaan Kapal di Perairan Pandu
              Luar Biasa Selat Malaka dan Selat Singapura.
            </li>
            <li className="list-decimal" data-aos="fade-right">
              Pelayanan Jasa Pemanduan dan Penundaan Kapal di TUKS dan TERSUS
              Wilayah Kepulauan Riau.
            </li>
            <li className="list-decimal" data-aos="fade-right">
              Pembersihan Limbah Akibat Tubrukan minyak dilaut untuk Wilayah
              Utara Bintan.
            </li>
            <li className="list-decimal" data-aos="fade-right">
              Pengembangan Pelabuhan Shorebase di Matak Kepulauan Anambas.
            </li>
            <li className="list-decimal" data-aos="fade-right">
              Pengelolaan Lay – Up di Perairan Barelang dan Ship To Ship di
              Perairan Tanjung Berakit.
            </li>
            <li className="list-decimal" data-aos="fade-right">
              Penyediaan Bunkering Kapal
            </li>
            <li className="list-decimal" data-aos="fade-right">
              Bisnis Port Reseption Facility
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

Index.Layout = "User";
export default Index;
