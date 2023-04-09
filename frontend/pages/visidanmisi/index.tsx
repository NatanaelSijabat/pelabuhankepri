import Head from "next/head";
import React from "react";
import Header from "../../components/User/Header";

export default function Index() {
  return (
    <>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA) - Visi dan Misi</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Visi dan Misi" background="bg-visimisi" />
      <div className="py-10 p-3 sm:p-20">
        <div className="pt-6">
          <span
            data-aos="fade-left"
            className="text-primary font-extrabold text-5xl"
          >
            Visi
          </span>
          <p
            className="text-lg text-left pt-6 sm:text-xl"
            data-aos="fade-right"
          >
            Menjadi Badan Usaha Pengelola Pelabuhan dan Logistik yang memiliki
            keunggulan bersaing dalam Operasional dan Pelayanan dengan
            menjadikan Kepulauan Riau sebagai basis Business Maritim dunia.
          </p>
        </div>
        <div className="text-justify pt-6">
          <span
            className="font-extrabold text-primary text-5xl"
            data-aos="fade-left"
          >
            Misi
          </span>
          <ul className="p-5 list-outside text-xl">
            <li className="list-decimal" data-aos="fade-right">
              Mewujudkan Manusia yang Bersumber Daya (Human Capital)
              dilingkungan perusahaan. Best Place To Works serta fokus pada
              kebutuhan pelanggan sebagai perwujudan Excellent Services.
            </li>
            <li className="list-decimal list-outside" data-aos="fade-right">
              Menyediakan, membangun dan mengoperasikan pelayanan kepelabuhanan
              dan integrated logistic , yang berkualitas dan handal untuk
              memenuhi kepuasan pelanggan.
            </li>
            <li className="list-decimal list-outside" data-aos="fade-right">
              Menciptakan nilai perusahaan bagi pemegang saham dan meningkatkan
              kesehatan perusahaan melalui pengelolaan berbasis Good Corporate
              Government (GCG).
            </li>
            <li className="list-decimal list-outside" data-aos="fade-right">
              Menciptakan atau mendorong pertumbuhan regional, nasional dan
              internasional dengan melakukan kerjasama strategis dengan berbagai
              pihak.
            </li>
            <li className="list-decimal list-outside" data-aos="fade-right">
              Sebagai Badan Usaha Milik Daerah memberikan konstribusi dalam
              menjamin kelancaran dan keamanan arus kapal dan barang untuk
              mewujudkan efisiensi biaya logistik.
            </li>
            <li className="list-decimal list-outside" data-aos="fade-right">
              Sebagai Badan Usaha Milik Daerah memberikan konstribusi terhadap
              Pendapatan Asli Daerah.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
