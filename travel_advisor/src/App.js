import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';

import { getPlacesData } from './api';

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: ['Roboto']
  },
  palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: deepOrange[400],
    },
  },
});

const App = () => {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  // grabs and sets users current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude }}) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
   },[]);
  

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data);
      })
  }, [coordinates, bounds]);

  return (
    <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
    </ThemeProvider>
  );
};

export default App;
