import React from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import vinoRosso from '../data/vino_rosso.json';
import ProductCard from '../components/ProductCard';

const VinoRosso = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate('/vini')}>
          ← Torna ai Vini
        </Button>

        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#7d1d1d' }}>
          Vini Rossi
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {vinoRosso.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ProductCard product={item} assetFolder="vino_rosso" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default VinoRosso;
