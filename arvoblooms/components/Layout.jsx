import React from "react";

import Footer from "./Footer";
import Cart from "./Cart";
import Navbar2 from "./Navbar2";

export default function Layout({ children }) {
  return (
    <>
      <Navbar2 />
      <Cart />
      <main>{children}</main>
      <Footer />
    </>
  );
}
