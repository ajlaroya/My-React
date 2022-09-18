import { useEffect, useState } from "react";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

import { shopifyClient, parseShopifyResponse } from "../utils/shopify";

export default function Home({ products }) {
  return (
    <div>
      <Hero />
      <CTA />
      <ProductList products={products} />
    </div>
  );
}

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();
  const checkout = await shopifyClient.checkout.create();

  return {
   props: {
    products: parseShopifyResponse(products),
    checkout: parseShopifyResponse(checkout),
  },
 };
};
