import { Grid, Skeleton, Container } from "@mantine/core";
import { ProductCard } from "./ProductCard";
import { Key } from "react";

const FeaturedProducts = ({ products }:any) => (
  <Container>
    <Grid>
    {products.map((product: { handle: number; name: string; price: string; collection: string; image: string; }, index: Key | null | undefined) => (
      <Grid.Col xs={4} key={index}><ProductCard product={product} /></Grid.Col>
    ))}
    </Grid>
  </Container>
);

export default FeaturedProducts;
