import React from "react";

import Footer from "./Footer";
import Cart from "./Cart";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Cart />
      <main>{children}</main>
      <Footer />
    </>
  );
}
