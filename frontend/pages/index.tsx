import Head from "next/head";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Card } from "antd";
import Link from "next/link";
import { LoadingOutlined } from "@ant-design/icons";

// interface Props {
//   data: {
//     id: number;
//     title: string;
//     image: string;
//   }[];
// }

const { Meta } = Card;
const Index = () => {
  return (
    <>
      <Head>
        <title>PT PELABUHAN KEPRI (PERSERODA)</title>
        <meta name="description" content="PT PELABUHAN KEPRI (PERSERODA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[35rem] bg-slide bg-no-repeat relative mt-16 z-0">
        <br />
        <Marquee className="bg-secondary" speed={90}>
          Jam Operasional : Senin - Jumat 8 am to 4 pm
        </Marquee>
      </div>
      <div className="flex flex-col sm:flex-row h-fit overflow-hidden">
        <Link href="/visidanmisi" className="bg-about bg-cover w-full sm:w-1/4">
          <div className="bg-cover h-[12rem] bg-blurr">
            <Meta
              title={
                <span className="pt-32 text-center w-full sm:w-1/4 absolute text-white text-2xl">
                  Pelabuhan Kepri <p className="text-sm">Visi dan Misi</p>
                </span>
              }
            />
          </div>
        </Link>
        <Link
          href="/produkdanlayanan"
          className="bg-about bg-cover w-full sm:w-1/4"
        >
          <div className="bg-cover h-[12rem] bg-blurr">
            <Meta
              title={
                <span className="pt-32 text-center w-full sm:w-1/4 absolute text-white text-2xl">
                  Pelabuhan Kepri <p className="text-sm">Layanan</p>
                </span>
              }
            />
          </div>
        </Link>
        <Link href="/galeri" className="bg-about bg-cover w-full sm:w-1/4">
          <div className="bg-cover h-[12rem] bg-blurr">
            <Meta
              title={
                <span className="pt-32 text-center w-full sm:w-1/4 absolute text-white text-2xl">
                  Pelabuhan Kepri <p className="text-sm">Galeri</p>
                </span>
              }
            />
          </div>
        </Link>
        <Link
          href="/sertifikatdanpenghargaan"
          className="bg-about bg-cover w-full sm:w-1/4"
        >
          <div className="bg-cover h-[12rem] bg-blurr">
            <Meta
              title={
                <span className="pt-32 text-center w-full sm:w-1/4 absolute text-white text-2xl">
                  Pelabuhan Kepri <p className="text-sm">Sertifikat</p>
                </span>
              }
            />
          </div>
        </Link>
      </div>
      <div className="h-screen bg-about bg-cover mb-6 mt-10">
        <div className="bg-blurr h-screen bg-cover">
          <div className="flex sm:flex-row">
            <div className="p-20">
              <Image
                src="/profile.jpg"
                alt="Image"
                width={900}
                height={100}
                quality={100}
              />
            </div>
            <div className="p-20">
              <h1 className="capitalize text-4xl text-white">Direktur</h1>
              <br />
              <hr
                style={{
                  color: "#25A9E9",
                  backgroundColor: "#25A9E9",
                  height: 2.5,
                  borderColor: "##25A9E9",
                  width: "100%",
                }}
              />
              <p className="text-xl text-justify text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-100 bg-slide bg-cover mt-10 p-20">
        <div className="grid grid-flow-row-dense grid-cols-2 sm:p-20 sm:gap-6">
          <div className="col-span-1">
            <h1 className="text-4xl text-primary">
              Berita <span className="text-secondary text-4xl">Terbaru</span>
            </h1>
            <br />
            <hr
              style={{
                color: "#25A9E9",
                backgroundColor: "#25A9E9",
                height: 2.5,
                borderColor: "##25A9E9",
                width: "100%",
              }}
            />
            <div className="pt-8">
              <p className="text-3xl pb-4 hover:text-secondary">
                What is Lorem Ipsum?
              </p>
              <img
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
              <p className="text-xl text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="cols-span-1">
            <br />
            <hr
              style={{
                color: "#25A9E9",
                backgroundColor: "#25A9E9",
                height: 2.5,
                borderColor: "##25A9E9",
                width: "100%",
              }}
            />
            <div className="max-w-xl pt-6"></div>
            <div className="max-w-xl pt-6"></div>
            <div className="max-w-xl pt-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

// Index.getInitialProps = async () => {
//   const req = await axios.get(APIConfig.API_URL + "/artikel");
//   const res = await req.data.data;

//   return { data: res };
// };

export default Index;
