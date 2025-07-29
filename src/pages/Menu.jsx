import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import categorieMenu from '../data/categorieMenu.json';
import ProductCard from '../components/ProductCard';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate('/')}>
        ← Torna alla Home
      </Button>

      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#7d1d1d', mb: 4 }}>
        Esplora il Menu
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {categorieMenu.map((cat, idx) => (
          <Grid item key={idx}>
            <ProductCard
              product={cat}
              assetFolder="menu"
              onClick={() => navigate(cat.link)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
