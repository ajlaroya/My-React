import React from 'react';
import Grid from '@mui/material/Grid';

import Product from './product/Product';

const products = [
    { id: '1', name: 'Monstera', description: 'Swiss cheese plant.', price: "$10", image: 'https://www.ikea.com/au/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0901227_pe687834_s5.jpg'},
    { id: '2', name: 'Aloe Vera', description: 'Succulent medicinal plant.', price: "$15", image: 'https://m.media-amazon.com/images/I/81g7NtpwkRL._AC_SL1500_.jpg'},
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) =>
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                )}
            </Grid>
        </main>
    )
}

export default Products;