import ComingSoon from '../components/ComingSoon'
import ProductList from './ProductList'
import { shopifyClient, parseShopifyResponse } from "../utils/shopify";

async function getPosts() {
  const products = await shopifyClient.product.fetchAll();
  return parseShopifyResponse(products);
}

export default async function Page() {
  const products = await getPosts();

  return (
    <>
      <ComingSoon />
      <ProductList products={products} />
    </>
  )
}
