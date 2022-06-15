import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from '../assets/images/banner2.jpg'

const HeroBanner = () => {
  return (
    <Box
        sx={{
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px'}
        }}
        position="relative"
        p="20px"
    >
      <Typography
        color="#FF5349"
        fontWeight="600"
        fontSize="26px"
        letterSpacing="-1px"
      >
        Yeah Buddy, Light Weight!
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        letterSpacing="-1px"
      >
        Aint nuttin' <br /> but a peanut.
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={3}
      >
        Check out the most effective exercises!
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
      >Explore Exercises</Button>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
