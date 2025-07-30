import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import categorieVini from '../data/categorieVini.json';
import ProductCard from '../components/ProductCard';

const Vini = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate('/')}>
        ← Torna alla Home
      </Button>

      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#7d1d1d', mb: 4 }}>
        I Nostri Vini
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {categorieVini.map((cat, idx) => (
          <Grid item key={idx}>
            <ProductCard
              product={cat}
              assetFolder="vini"
              onClick={() => navigate(cat.link)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Vini;
