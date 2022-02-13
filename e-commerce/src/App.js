import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00e676",
      },
      secondary: {
        main: "#11cb5f",
      },
    },
  });

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
    setCart(await commerce.cart.retrieve());
  };

  // function to add products to cart
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  // function to remove products from cart
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  // function to empty cart
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  // function to update cart quantity
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  // calls functions on render,
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar totalItems={cart.total_items} />
          <Routes>
            <Route
              path="/"
              element={
                <Products products={products} onAddToCart={handleAddToCart} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                  handleUpdateCartQty={handleUpdateCartQty}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <Checkout />
              }
            />
          </Routes>
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;
