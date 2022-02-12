import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";
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

  // passes params to API and adds products to cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
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
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;
