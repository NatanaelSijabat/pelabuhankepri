import Head from "next/head";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Button, Card } from "antd";
import Link from "next/link";
import { FcCalendar } from "react-icons/fc";
import { MyPage } from "../components/types";

// interface Props {
//   data: {
//     id: number;
//     title: string;
//     image: string;
//   }[];
// }

const { Meta } = Card;
const Index: MyPage = () => {
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
      <div className="h-screen bg-about bg-cover sm:mb-6 sm:mt-10">
        <div className="bg-blurr h-screen bg-cover">
          <div className="grid grid-rows-2 sm:grid-cols-2">
            <div className="p-20">
              <Image
                src="/profile.jpg"
                alt="Image"
                width={900}
                height={100}
                quality={100}
              />
            </div>
            <div className="p-9 sm:p-20">
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
              <p className="text-sm sm:text-xl text-justify text-white">
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
      <div className="h-max bg-slide bg-cover mt-10 p-3 sm:p-10">
        <div className="grid grid-rows-2 sm:grid-cols-2 sm:px-10 sm:py-2 sm:gap-6 pb-6">
          <div className="text-white text-3xl sm:text-4xl capitalize">
            <span className="text-primary pr-1">berita</span>
            Terbaru
          </div>
          <div className="grid justify-items-end sm:justify-items-end text-white">
            <Button type="primary" className="capitalize text-sm bg-secondary">
              selengkapnya
            </Button>
          </div>
        </div>
        <div className="grid grid-rows-2 sm:grid-rows-3 sm:grid-cols-2 gap-4 sm:px-10 sm:py-2 sm:gap-6">
          <div className="row-span-3 text-xl">
            <div className="pb-4">
              <Link href="/artikel">
                <p className="capitalize text-justify sm:text-lg hover:text-secondary line-clamp-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Link>
            </div>
            <div className="relative h-[50vh]">
              <Image
                src="/produkdanlayanan.jpg"
                alt="image"
                fill
                quality={100}
              />
            </div>
            <p className="capitalize text-justify sm:text-base line-clamp-6">
              it is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          <div className="rows-span-2 cols-span-2">
            <div className="grid grid-flow-row grid-cols-4 bg-white">
              <div className="col-span-3 p-2 sm:p-4 border-r border-t-2 border-secondary">
                <Link href="/artikel">
                  <p className="text-secondary text-xl">What is Lorem Ipsum?</p>
                  <p className="text-justify line-clamp-4 text-black">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </Link>
              </div>
              <div className="pt-4 sm:py-6 sm:pl-4 border-l border-t-2 border-secondary">
                <FcCalendar size={90} />
                <p className="text-center text-xs sm:text-sm sm:text-left sm:pl-3">
                  10-20-2022
                </p>
              </div>
            </div>
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
Index.Layout = "User";
