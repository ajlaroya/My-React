import ComingSoon from '../components/ComingSoon'
import ProductList from '../components/ProductList'
import About from '../components/About'
import { shopifyClient, parseShopifyResponse } from "../utils/shopify";

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <ComingSoon />
      <ProductList products={products} />
      <About />
    </>
  )
}

async function getProducts() {
  const products = await shopifyClient.product.fetchAll();
  return parseShopifyResponse(products);
}