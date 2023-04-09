"use client";
import { Navbar } from "flowbite-react";
import React, { useState } from "react";

const Nav = () => {
  const [isHover, setIsHover] = useState(false);
  const [isHoverInvestor, setIsHoverInvestor] = useState(false);

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="border-b-4 border-secondary fixed top-0 z-20 w-full"
    >
      <Navbar.Brand to="/" className="m-4">
        <img src="logo.png" alt="logo Image" className="sm:mr-3 h-8 sm:h-16" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-24">
        <Navbar.Link href="/" active={true} className="text-sm uppercase">
          Beranda
        </Navbar.Link>
        <Navbar.Link
          className="text-sm uppercase relative"
          onMouseEnter={() => setIsHover(true)}
        >
          Tentang Perusahaan
          {isHover && (
            <div
              className="absolute bg-white border p-2 z-30 m-2 w-60 top-4"
              onMouseLeave={() => setIsHover(false)}
            >
              <ul>
                <Navbar.Link href="/about" className="text-sm uppercase m-2">
                  Struktur Organisasi
                </Navbar.Link>
                <Navbar.Link href="/about" className="text-sm uppercase m-2">
                  Sertifikat & Penghargaan
                </Navbar.Link>
              </ul>
            </div>
          )}
        </Navbar.Link>
        <Navbar.Link className="text-sm uppercase" href="/layanan">
          Layanan
        </Navbar.Link>
        <Navbar.Link className="text-sm uppercase" href="/galeri">
          Galeri
        </Navbar.Link>
        <Navbar.Link className="text-sm uppercase" href="/artikel">
          Artikel
        </Navbar.Link>
        <Navbar.Link
          className="text-sm uppercase"
          onMouseEnter={() => setIsHoverInvestor(true)}
        >
          Investor Relation
          {isHoverInvestor && (
            <div
              className="absolute bg-white border p-2 z-30 m-2 w-60"
              onMouseLeave={() => setIsHoverInvestor(false)}
            >
              <ul>
                <Navbar.Link href="/about" className="text-sm uppercase m-2">
                  prospek penawaran umum
                </Navbar.Link>
                <Navbar.Link href="/about" className="text-sm uppercase m-2">
                  laporan tahun
                </Navbar.Link>
                <Navbar.Link href="/about" className="text-sm uppercase m-2">
                  laporan keuangan
                </Navbar.Link>
                <Navbar.Link href="/about" className="text-sm uppercase m-2">
                  informasi rups
                </Navbar.Link>
                <Navbar.Link href="/about" className="text-sm uppercase m-2">
                  informasi saham
                </Navbar.Link>
                <Navbar.Link href="/about" className="text-sm uppercase m-2">
                  informasi obligasi
                </Navbar.Link>
                <Navbar.Link href="/about" className="text-sm uppercase m-2">
                  informasi deviden
                </Navbar.Link>
              </ul>
            </div>
          )}
        </Navbar.Link>
        <Navbar.Link className="text-sm uppercase" href="/kontak">
          Kontak Kami
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
