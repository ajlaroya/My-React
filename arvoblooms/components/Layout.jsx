import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import Cart from './Cart'

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <Cart />
        <main>{children}</main>
        <Footer />
      </>
    )
  }