import React from "react";
import Head from "next/head";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <Head>
        <title>Quiet Kids Club</title>
        <meta name="description" content="Quiet Kids Club apparel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Apparel for the introvert</p>
      </div>

      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>

      <FooterBanner />
    </div>
  );

};

export const getServerSideProps = async () => {
  // fetch ALL products and banners from sanity
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
