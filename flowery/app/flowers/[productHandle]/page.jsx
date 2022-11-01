import { shopifyClient, parseShopifyResponse } from "../../../utils/shopify";
import ProductDetail from "./ProductDetail";
import RelatedProducts from "./RelatedProducts";
import { Suspense } from "react";

async function getProduct(productHandle) {
  const product = await shopifyClient.product.fetchByHandle(productHandle);
  return parseShopifyResponse(product);
}

async function getCollection() {
  const collection = await shopifyClient.collection.fetchAllWithProducts();
  return parseShopifyResponse(collection);
}

export default async function Page({ params }) {
  const product = await getProduct(params?.productHandle);
  const collection = await getCollection();

  return (
    <>
      <ProductDetail product={product} />

      <Suspense fallback={<p>Loading related products...</p>}>
        <RelatedProducts collection={collection} />
      </Suspense>
    </>
  );
}
