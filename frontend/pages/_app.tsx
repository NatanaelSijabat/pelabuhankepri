import { useEffect } from "react";
import UserLayouts from "../layouts/UserLayouts";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <UserLayouts>
      <Component {...pageProps} />
    </UserLayouts>
  );
}
