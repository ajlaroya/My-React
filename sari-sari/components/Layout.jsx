import React, { useState }from "react";
import { Header, Footer } from "./";

const Layout = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <>
      <body className={darkTheme ? 'dark bg-gradient-to-r from-gray-700 via-gray-900 to-black' : ''}>
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        {children}
        <Footer />
      </body>
    </>
  );
};

export default Layout;
