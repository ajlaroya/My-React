import CTA from "../components/CTA";
import ProductList from "../components/ProductList";

import { shopifyClient, parseShopifyResponse } from "../utils/shopify";

export default function Home({ products }) {
  return (
    <div>
      <CTA />
      <ProductList products={products} />
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
