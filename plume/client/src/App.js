import React from "react";
import { Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: '#7b68ee',
    },
  },
  shape: {
    borderRadius: 6,
  },
});

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container maxwidth="xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/posts/search" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route
              path="/auth"
              element={!user ? <Auth /> : <Navigate replace to="/posts" />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
