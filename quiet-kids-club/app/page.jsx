import Landing from '../components/Landing'
import ProductFeature from '../components/ProductFeature'
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
      <ProductFeature products={products} />
    </>
  );
}
