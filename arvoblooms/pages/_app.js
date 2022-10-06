import Head from "next/head";

import ShopProvider from "../context/shopContext";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Layout>
        <Head>
          <title>Home | Flowery</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
