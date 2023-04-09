/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    // height: {
    //   heightHead: "calc(100vh-105px)",
    // },
    colors: {
      primary: "#1F4692",
      secondary: "#25A9E9",
      black: "#000000",
      white: "#ffffff",
      blurr: "rgba(0,0,0,0.2)",
    },
    boxShadow: {
      kabur: "rgba(0,0,0,0.3) 0px 19px 38px,rgba(0,0,0,0.22)0px 15px 12px",
    },
    extend: {
      backgroundImage: {
        slide: "url('/background.png')",
        send: "url(/quote_bg.jpg)",
        about: "url('/about_bg.jpg')",
        sejarah: "url('/sejarah.jpg')",
        tentangkami: "url('/tentangkami.jpg')",
        visimisi: "url('/visimisi.jpg')",
        produkdanlayanan: "url('/produkdanlayanan.jpg')",
        pelabuhantransitcontainer: "url('/pelabuhan.jpg')",
        labuhjangkar: "url('/labuh-jangkar.jpg')",
      },
    },
  },
};
