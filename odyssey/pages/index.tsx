import type { NextPage } from "next";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";

import FeaturedProducts from "../components/FeaturedProducts";
import { FeaturesGrid } from "../components/Features";
import { FooterLinks } from "../components/Footer";
import { HeaderResponsive } from "../components/Header";
import { HeroTitle } from "../components/Hero";

import { data, links } from "../utils/constants";
// import products from "../utils/data";

const Home: NextPage = ({ products }:any) => {
  return (
    <>
      <HeaderResponsive links={links} marginBottom={120} />
      <HeroTitle />
      <FeaturedProducts products={products} />
      <FeaturesGrid
        title={"Odyssey"}
        description={"Cross-platform journal app. Mark your adventures now"}
      />
      <FooterLinks data={data} />
    </>
  );
};

export default Home;


  // Fetches all products from shopify store
export const getServerSideProps = async () => {
  const products = await shopifyClient.product.fetchAll();

  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
};
