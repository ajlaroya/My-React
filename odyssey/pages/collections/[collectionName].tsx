import React from "react";
import { useRouter } from "next/router";

import { HeaderResponsive } from "../../components/Header";
import FeaturedProducts from "../../components/FeaturedProducts";

import productData from "../../utils/data";
import { links } from "../../utils/constants";

const CollectionPage = () => {
  const router = useRouter();
  const { collectionName } = router.query;
  const products = productData.filter(
    (product) => product.collection === collectionName
  );

  return (
    <>
      <HeaderResponsive links={links} marginBottom={30} />
      <FeaturedProducts products={products} />
    </>
  );
};

export default CollectionPage;
