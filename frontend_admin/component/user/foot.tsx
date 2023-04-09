"use client";
import { Footer } from "flowbite-react";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Foot = () => {
  return (
    <>
      <Footer container={true}>
        <div className="w-full">
          <div className="grid grid-rows-2 w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="w-1/2">
              <Footer.Brand src="logo.png" alt="Logo" className="h-16" />
              <p className="pt-10">
                PT. Pelabuhan Kepri (BUMD) hadir untuk menjalankan
                amanahUndang-Undang No 17 Tahun 2008 Tentang Pelayaran.
                Kepulauan Riau merupakan Provinsi yang 98% adalah perairan laut,
                sehingga usaha kepelabuhanan dan transportasi laut merupakan
                sektor yang sangat potensial untuk digali sebagai sumber
                Pendapatan Asli Daerah (PAD).
              </p>
            </div>
            <div className="grid gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Kontak Kami" />
                <Footer.LinkGroup col={true}>
                  <div className="flex">
                    <HiOutlineMail className="text-2xl mr-2" />
                    <Footer.Link href="#">admin@gmail.com</Footer.Link>
                  </div>
                  <div className="flex">
                    <FaMapMarkerAlt className="text-2xl mr-2" />
                    <Footer.Link href="#">Jalan jalan</Footer.Link>
                  </div>
                  <div className="flex">
                    <FiPhoneCall className="text-2xl mr-2" />
                    <Footer.Link href="#">08123456789</Footer.Link>
                  </div>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              by="PT. Pelabuhan Kepri. All rights reserved."
              year={new Date().getFullYear()}
            />
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Foot;
