import Head from "next/head";

import { SessionProvider } from "next-auth/react";
import ShopProvider from "../context/shopContext";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Head>
            <title>Home | Flowery</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ShopProvider>
  );
}

export default MyApp;
