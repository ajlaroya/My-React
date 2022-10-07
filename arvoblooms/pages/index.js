import ProductList from "../components/ProductList";
import ComingSoon from "../components/ComingSoon";
import About from "../components/About";

import { shopifyClient, parseShopifyResponse } from "../utils/shopify";

export default function Home({ products }) {
  return (
    <div>
      <ComingSoon />
      <ProductList products={products} />
      <About />
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
