import ProductDetail from '../../../components/ProductDetail'
import { client } from '../../../utils/shopify-client'

async function getProduct(handle) {
    const product = await client.product.fetchByHandle(handle);
    return JSON.parse(JSON.stringify(product));
  }

export default async function Product({ params }) {
  const handle = params.productHandle
  const product = await getProduct(handle);

  return (
    
    <>
        <ProductDetail product={product} />
    </>
  );
}
