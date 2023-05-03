import { Layout } from "antd";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

const Foot = () => {
  return (
    <Layout>
      <div className="bg-secondary text-white px-6 py-2">
        <div className="sm:p-6 pt-10">
          <div className="uppercase text-2xl text-left">
            Hubungi Kami <p>pt pelabuhan kepri</p>
          </div>
          <div className="uppercase text-xl pt-6">kantor pusat :</div>
          <div className="pt-2 flex">
            <div className="pr-2">
              <FaMapMarkerAlt size={25} />
            </div>
            <div className="text-base text-justify">
              <Link
                href={process.env.address}
                target="_blank"
                rel="noopener norefferer"
              >
                Jl. Arif Rahman Hakim No. 19 - 20, Kel.Tanjung Ayun Sakti Kec.
                Bukit Bestari, Tanjungpinang Provinsi Kepulauan Riau
              </Link>
            </div>
          </div>
          <div className="flex pt-2">
            <div className="pr-2">
              <AiOutlinePhone size={25} />
            </div>
            <div className="text-justify text-base">
              <span>0771 – 4502751</span>
            </div>
          </div>
          <div className="flex pt-2">
            <div className="pr-2">
              <SiMinutemailer size={25} />
            </div>
            <div className="text-justify text-base">
              <Link
                href={process.env.email}
                target="_blank"
                rel="noopener norefferer"
              >
                pt.pelabuhankepri@yahoo.com
              </Link>
            </div>
          </div>
          <div className="flex pt-2">
            <div className="pr-2">
              <BsInstagram size={25} />
            </div>
            <div className="text-justify text-base">
              <Link
                href={process.env.instagram}
                target="_blank"
                rel="noopener norefferer"
              >
                pelabuhankepri_pt
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary w-full text-center p-2 text-white">
        <span className="text-xs sm:text-sm">
          &copy; Copyrights {new Date().getFullYear()} PT. Pelabuhan Kepri. All
          rights reserved.
        </span>
      </div>
    </Layout>
  );
};

export default Foot;
