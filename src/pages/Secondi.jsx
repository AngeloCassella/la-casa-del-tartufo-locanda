import React from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import secondi from '../data/secondi.json';
import ProductCard from '../components/ProductCard';

const Secondi = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Button
          variant="outlined"
          sx={{ mb: 2 }}
          onClick={() => navigate('/')}
        >
          ← Torna alla Home
        </Button>

        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#7d1d1d' }}>
          I nostri Secondi Piatti
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {secondi.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ProductCard product={item} assetFolder="secondi" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Secondi;
