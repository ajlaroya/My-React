import { shopifyClient, parseShopifyResponse } from "../../utils/shopify";
import Shop from "./shop";

async function getProducts() {
  const products = await shopifyClient.product.fetchAll();
  return parseShopifyResponse(products);
}

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <Shop products={products} />
    </>
  );
}
