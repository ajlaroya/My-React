import { Grid, Text, Container } from "@mantine/core";
import { ProductCard } from "./ProductCard";
import { Key } from "react";
import { useRouter } from "next/router";

const FeaturedProducts = ({ products }: any) => {
  const router = useRouter();
  const goToProductPage = (productHandle: any) => router.push(`/products/${productHandle}`)

  return (
    <Container>
      {products && products.length > 0 ? (
        <Grid>
          {products.map((product: { handle: Key | null | undefined; }) => (
              <Grid.Col xs={4} key={product.handle}>
                <ProductCard product={product} goToProductPage={goToProductPage} />
              </Grid.Col>
            )
          )}
        </Grid>
      ) : (
        <Text
          size="xl"
          weight="bold"
          align="center"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        >
          There are no products in this collection
        </Text>
      )}
    </Container>
  );
};

export default FeaturedProducts;
