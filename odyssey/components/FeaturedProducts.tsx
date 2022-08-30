import { Grid, Skeleton, Container } from "@mantine/core";
import { ProductCard } from "./ProductCard";
import products from '../utils/data'

const FeaturedProducts = () => (
  <Container my="md">
    <Grid>
    {products.map((product) => (
      <Grid.Col xs={4}><ProductCard product={product} /></Grid.Col>
    ))}
    </Grid>
  </Container>
);

export default FeaturedProducts;
