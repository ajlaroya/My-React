import Head from "next/head";

import CTA from "../components/CTA";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

import { shopifyClient, parseShopifyResponse } from "../utils/shopify";

export default function Home({ products }) {
  console.log(products)
  return (
    <div>
      <Head>
        <title>arvoblooms</title>
        <meta name="description" content="Little florist based in Melbourne" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌺</text></svg>"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main>
        <Navbar />
        <CTA />
        <ProductList products={products} />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
   props: {
    products: parseShopifyResponse(products),
  },
 };
};
