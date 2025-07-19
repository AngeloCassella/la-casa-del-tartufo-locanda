import React from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bevande from '../data/bevande.json';
import ProductCard from '../components/ProductCard';

const Bevande = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Button
          variant="outlined"
          sx={{ mb: 2 }}
          onClick={() => navigate('/')}
        >
          Torna alla Home
        </Button>

        <Typography variant="h4" gutterBottom sx={{ color: '#7d1d1d' }}>
          Bevande
        </Typography>

        <Grid container spacing={3} justifyContent="center">
        {bevande.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} 
                sx={{ display: 'flex', justifyContent: 'center' }} >
            <ProductCard product={item} assetFolder="bevande" />
            </Grid>
        ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Bevande;

