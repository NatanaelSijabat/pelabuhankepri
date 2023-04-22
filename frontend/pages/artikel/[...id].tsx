import axios from "axios";
import Head from "next/head";
// import { useRouter } from "next/router";
import React from "react";
import config from "../../utils/config";
import Header from "../../components/user/Header";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { MyPage } from "../../components/types";

interface Artikel {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  image: string;
}

interface ArtikelDetailPageProps {
  detailData: Artikel;
}

const ArtikelId: MyPage<ArtikelDetailPageProps> = ({ detailData }) => {
  // const router = useRouter();
  // const { id, title } = router.query;

  const myLoader = ({ src }: any) => {
    return `${config.ImagePath}/artikel/${detailData.image}`;
  };

  return (
    <>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA) - Artikel</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name={`${detailData.title}`} background="bg-produkdanlayanan" />
      <div className="sm:p-20 h-fit">
        <div className="py-16 sm:py-0 px-2 sm:px-0">
          <div className="sm:pb-4 pb-2 w-fit">
            <Link href={"/artikel"}>
              <IoMdArrowRoundBack size={35} />
            </Link>
          </div>
          <div>
            <p className="text-3xl sm:text-5xl font-bold text-secondary">
              {detailData.title}
            </p>
            <div className="flex items-center justify-center p-10">
              <Image
                alt="image"
                loader={myLoader}
                src={config.ImagePath + `/artikel/${detailData.image}`}
                width={900}
                height={100}
              />
            </div>
            <h1 className="text-2xl text-justify">{detailData.content}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const id = query.id;
  const res = await axios.get(config.API_URL + `/artikel/${id}`);

  return {
    props: {
      detailData: res.data.data,
    },
  };
};

ArtikelId.Layout = "User";
export default ArtikelId;
