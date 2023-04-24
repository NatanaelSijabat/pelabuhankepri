import { useEffect } from "react";
import "../styles/globals.css";
import AOS from "aos";
import { MyAppProps } from "../components/types";
import { Layouts } from "../components/Layouts";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: MyAppProps) {
  useEffect(() => {
    AOS.init();
  });
  const Layout = Layouts[Component.Layout] ?? ((page: any) => page);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
