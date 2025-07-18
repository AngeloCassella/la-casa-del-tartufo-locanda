import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../assets/LOGO - La casa del tartufo locanda .jpeg';

const Header = () => {
  return (
    <Box textAlign="center" py={4}>
      <img src={logo} alt="Logo Locanda" style={{ width: 180, borderRadius: 10 }} />
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#7d1d1d', mt: 2 }}>
        La Casa del Tartufo
      </Typography>
      <Typography variant="subtitle1" sx={{ color: '#3f3f3f' }}>
        Locanda - Vineria con Cucina e Camere
      </Typography>
    </Box>
  );
};

export default Header;
