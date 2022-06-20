import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '25px' } }} mt="41px" textAlign="center" fontWeight="bold">Y.B.L.W &copy;</Typography>
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '25px', xs: '18px' } }} mt="41px" textAlign="center" pb="40px">Made with 💪 by Arthur Laroya</Typography>
  </Box>
);

export default Footer;