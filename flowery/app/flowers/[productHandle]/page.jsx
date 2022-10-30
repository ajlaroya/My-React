import { shopifyClient, parseShopifyResponse } from "../../../utils/shopify";
import ProductDetail from './ProductDetail';
import RelatedProducts from "../../../components/RelatedProducts";

export default async function Page({ params }) {
  const product = await getProduct(params?.productHandle);

  return (
    <>
      <ProductDetail product={product} />
      {/* <RelatedProducts
        addItemToCheckout={addItemToCheckout}
        openCart={openCart}
      /> */}
    </>
  );
}

async function getProduct(productHandle) {
  const product = await shopifyClient.product.fetchByHandle(productHandle);
  return parseShopifyResponse(product);
}
