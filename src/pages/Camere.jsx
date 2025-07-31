import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import camereData from '../data/categoriaCamere.json';
import ProductCard from '../components/ProductCard';

const Camere = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate('/')}>
        ← Torna alla Home
      </Button>

      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#7d1d1d', mb: 4 }}>
        Le Nostre Camere
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {camereData.map((camera, idx) => (
          <Grid item key={idx}>
            <ProductCard
              product={camera}
              assetFolder="camere"
              onClick={() => navigate(camera.link)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Camere;
