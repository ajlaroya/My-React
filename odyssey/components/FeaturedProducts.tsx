import { Grid, Text, Container } from "@mantine/core";
import { ProductCard } from "./ProductCard";
import { Key } from "react";

const FeaturedProducts = ({ products }: any) => (
  <Container>
    {products && products.length > 0 ? (
      <Grid>
        {products.map(
          (
            product: {
              handle: number;
              name: string;
              price: string;
              collection: string;
              image: string;
            },
            index: Key | null | undefined
          ) => (
            <Grid.Col xs={4} key={index}>
              <ProductCard product={product} />
            </Grid.Col>
          )
        )}
      </Grid>
    ) : (
      <Text size="xl" weight="bold" align="center" variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
        There are no products in this collection
      </Text>
    )}
  </Container>
);

export default FeaturedProducts;
