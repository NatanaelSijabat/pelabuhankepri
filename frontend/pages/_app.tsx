import React from "react";
import "../styles/globals.css";
import AOS from "aos";
import { MyAppProps } from "components/types";
import { Layouts } from "components/Layouts";
import "aos/dist/aos.css";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import en from "i18n/en.json";
import id from "i18n/id.json";
import { IntlProvider } from "react-intl";

type LocaleMessages = {
  [key: string]: {
    [key: string]: string;
  };
};

const messages: LocaleMessages = {
  en,
  id,
};

function getDirection(locale: string) {
  return "ltr";
}

const App = ({ Component, pageProps }: MyAppProps) => {
  React.useEffect(() => {
    AOS.init();
  });
  const Layout = Layouts[Component.Layout] ?? ((page: any) => page);
  const router = useRouter();
  const locale: string = router.locale || "id";

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout>
        <Component {...pageProps} dir={getDirection(locale)} />
      </Layout>
    </IntlProvider>
  );
};

export default appWithTranslation(App);
