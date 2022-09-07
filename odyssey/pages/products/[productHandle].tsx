import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  Text,
  Title,
  Button,
} from "@mantine/core";
import { IconShoppingCartPlus } from '@tabler/icons';
import { shopifyClient, parseShopifyResponse } from '../../lib/shopify'

import { HeaderResponsive } from "../../components/Header";

import productData from "../../utils/data";
import { links } from "../../utils/constants";

const ProductPage = ({product}) => {
  const router = useRouter();
  // Get productHandle from url: /products/[productHandle]
  const { productHandle }: any = router.query;
  // Get product data
  const product = productData.find(
    (product) => product.handle === parseInt(productHandle)
  );
  const { name, image, price }: any = product || {};

  return (
    <>
      <HeaderResponsive links={links} marginBottom={30} />
      {
        <Container my="md">
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
            {image?.length > 0 && (
              <Image
                src={image}
                alt={name}
                layout="responsive"
                width={500}
                height={500}
              />
            )}
            <Stack>
              <Title order={1}>{name}</Title>
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                size="xl"
                weight={700}
              >
                ${price}
              </Text>
              <Button
                radius="lg"
                style={{ width: 150 }}
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
                leftIcon={<IconShoppingCartPlus />}
              >
                Add to cart
              </Button>
            </Stack>
          </SimpleGrid>
        </Container>
      }
    </>
  );
};

export const getServerSideProps = async ({params}) => {
  const { productHandle } = params
  // Fetch one product
  const product = await shopifyClient.product.fetchByHandle(productHandle);


  return {
   props: {
    product: parseShopifyResponse(product),
  },
 };
};

export default ProductPage;
