import React from "react";

import { HeaderResponsive } from "../../components/Header";
import FeaturedProducts from "../../components/FeaturedProducts";

import { links } from "../../utils/constants";
import { shopifyClient, parseShopifyResponse } from '../../lib/shopify'

const CollectionPage = ({products}:any) => {
  return (
    <>
      <HeaderResponsive links={links} marginBottom={30} />
      <FeaturedProducts products={products} />
    </>
  );
};

export default CollectionPage;

export const getServerSideProps = async ({params}:any) => {
  const { collectionName } = params
  // Fetch all the collections
  const collectionsData = await shopifyClient.collection.fetchAllWithProducts()
  const collections = parseShopifyResponse(collectionsData);

  // Get the right products from collection
  const collection = collections.find((collection:any) => collection.title.toLowerCase() === collectionName)

  return {
   props: {
    collectionName,
    collections,
    products: collection.products
  },
 };
};
