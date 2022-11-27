import Landing from '../components/Landing'
import ProductList from '../components/ProductList'
import { client } from '../utils/shopify-client'

async function getProducts() {
  const products = await client.product.fetchAll();
  return JSON.parse(JSON.stringify(products));
}

async function createCheckout() {
  const checkout = await client.checkout.create();
  return JSON.parse(JSON.stringify(checkout));
}

export default async function Home() {
  const products = await getProducts();
  const checkout = await createCheckout();

  console.log(checkout)

  return (
    <>
      <Landing />
      <ProductList products={products} />
    </>
  );
}
