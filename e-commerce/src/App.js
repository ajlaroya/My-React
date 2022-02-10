import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const [products, setProducts] = useState([]);

  // fetches products on load
  const fetchProducts = async () => {
    // API call to commerce instance
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  // calls function on render, sets products
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
