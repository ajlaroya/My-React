import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  SimpleGrid,
  Container,
  Stack,
  Text,
  Title,
  Button,
} from "@mantine/core";
import { IconShoppingCartPlus } from '@tabler/icons';
import { shopifyClient, parseShopifyResponse } from '../../lib/shopify'

import { HeaderResponsive } from "../../components/Header";
import { links } from "../../utils/constants";

const ProductPage = ({product}:any) => {
  const { id, title, images, variants, collection, description } = product
  const { src: productImage } = images[0]
  const { price } = variants[0]

  return (
    <>
      <HeaderResponsive links={links} marginBottom={30} />
      { product &&
        <Container my="md">
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <Image
                src={productImage}
                alt={title}
                layout="fixed"
                width={500}
                height={500}
              />
            <Stack>
              <Title order={1}>{title}</Title>
              <Text
                component="p"
                size="md"
                color="dimmed"
              >
                {description}
              </Text>
              <p>{collection}</p>
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

export const getServerSideProps = async ({params}:any) => {
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
