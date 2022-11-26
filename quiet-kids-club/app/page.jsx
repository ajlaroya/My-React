import Landing from '../components/Landing'
import ProductList from '../components/ProductList'
import { client } from '../utils/shopify-client'

async function getProducts() {
  const products = await client.product.fetchAll();
  return JSON.parse(JSON.stringify(products));
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Landing />
      <ProductList products={products} />
    </>
  );
}
