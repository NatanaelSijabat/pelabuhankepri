import Head from "next/head";
import React from "react";
import Header from "../../../components/user/Header";
import { MyPage } from "../../../components/types";

const Index: MyPage = () => {
  return (
    <>
      <Head>
        <title>
          PT PELABUHAN KEPRI (PERSERODA) - Produk dan Layanan - Shipyard and
          Bunkering
        </title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        name="Shipyard and
          Bunkering"
        background="bg-labuhjangkar"
      />
      <div className="py-10 p-3 sm:p-20">
        <div className="pt-6 text-sm sm:text-xl">
          <span
            className="sm:text-5xl text-2xl font-extrabold text-primary"
            data-aos="fade-left"
          >
            Shipyard
          </span>
          <p className="text-justify pt-4 flow-root">
            Galangan kapal atau <span className="italic">shipyard</span> adalah
            sebuah tempat yang dirancang khusus yang dilengkapi fasilitas
            pendukung untuk proses pembuatan, pemeliharaan dan perbaikan kapal.
            Kapal-kapal ini dapat berupa jenis kapal dagang, kapal penumpang,
            kapal wisata, kapal militer dan sebagainya.
          </p>
          <p className="flow-root pt-2">
            Ada beberapa jenis galangan kapal diantaranya :
          </p>
          <ul className="p-4 pt-2 list-outside">
            <li className="list-decimal">
              <span className="italic">Building dock shipyard</span>
              <p className="text-justify">
                Galangan kapal atau <span className="italic">shipyard</span>{" "}
                yang hanya melakukan pekerjaan proses pembangunan kapal baru
                meliputi pekerjaan desain kapal, pemasangan gading awal,
                pemasangan pelat lambung, instalasi peralatan, pengecekan oleh{" "}
                <span className="italic">Quality Control</span>, berbagai macam
                tes fungsi, hingga pelaksanaan survey penerimaan kelas kapal
                oleh badan klasifikasi kapal yang telah ditunjuk.
              </p>
            </li>
            <li className="list-decimal">
              <span className="italic">Repair dock shipyard</span>
              <p className="text-justify">
                Galangan kapal atau <span className="italic">shipyard</span>{" "}
                yang hanya melakukan pekerjaan perbaikan kapal dan pemeliharaan
                kapal. Pekerjaan tersebut diantaranya meliputi pemeliharaan dan
                perbaikan konstruksi lambung kapal, pemeliharaan mesin utama,
                perbaikan sistem propulsi dan lain sebagainya.
              </p>
            </li>
            <li className="list-decimal">
              <span className="italic">Building and repair dock shipyard</span>
              <p className="text-justify">
                Galangan kapal atau <span className="italic">shipyard</span>{" "}
                yang melakukan proses pembuatan kapal baru dan juga
                pemeliharaan, perbaikan kapal lama. Galangan kapal atau{" "}
                <span className="italic">shipyard</span> di beberapa wilayah
                Indonesia menggunakan berbagai macam metode untuk membantu
                proses peluncuran kapal baru ataupun proses menaikan kapal dari
                perairan ke daratan. Metode-metode tersebut diantaranya:
              </p>
              <ul className="pl-5 capitalize">
                <li className="list-decimal">
                  <span className="italic">Slipway dock / dok tarik</span>
                </li>
                <li className="list-decimal">
                  <span className="italic">
                    Graving dock / dak gali atau dok kolam
                  </span>
                </li>
                <li className="list-decimal">
                  <span className="italic">Floating dock / dok apung</span>
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-justify">
            Dan saat ini PT. Pelabuhan Kepri telah memiliki Perjanjian Kerjasama
            dengan salah satu perusahaan docking internasional yang berlokasi di
            Batam dan siap mendukung kebutuhan maintenance atau supply part
            kapal yang diperlukan.
          </p>
        </div>
        <div className="pt-6 text-sm sm:text-xl">
          <span className="capitalize font-extrabold text-2xl sm:text-5xl text-primary">
            bunkering
          </span>
          <p className="text-justify pt-4">
            Kata <span className="italic">bunker</span> digunakan oleh militer
            untuk mendefinisikan area atau tempat untuk menyimpan dan melindungi
            melindungi personel dan persediaan (seperti bahan bakar, amunisi,
            makanan, dll). Dalam industri perkapalan, kata
            <span className="italic inline-flex">bunker</span> digunakan untuk
            mendefinisikan tempat penyimpanan bahan bakar atau minyak pelumas
            yang digunakan untuk operasi mesin.
          </p>
          <p className="text-justify pt-2">
            Kapal yang membawa bahan bakar atau minyak pelumas untuk membuangnya
            (discharge) ke pelabuhan, tidak akan disebut{" "}
            <span className="italic">bunker</span>. Jika kapal membawa bahan
            bakar atau minyak pelumas ke kapal lain untuk digunakan untuk
            pengoperasian permesinan, akan disebut{" "}
            <span className="italic">bunker</span> dan proses yang dilakukan
            untuk mengangkut atau memindahkan disebut sebagai{" "}
            <span className="italic">bunkering</span>.
          </p>
        </div>
      </div>
    </>
  );
};

Index.Layout = "User";
export default Index;
