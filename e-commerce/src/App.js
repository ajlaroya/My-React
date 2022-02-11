import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // fetches products on load
  const fetchProducts = async () => {
    // API call to commerce instance to load products
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  // gets cart and sets state
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  // passes params to API and adds products to cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  // calls functions on render,
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart)

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
