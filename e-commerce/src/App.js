import React from "react";

import { Products, Navbar } from "./components";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
