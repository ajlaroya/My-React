import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { black, purple } from '@mui/material/colors';

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
    </ThemeProvider>
  );
};

export default App;
