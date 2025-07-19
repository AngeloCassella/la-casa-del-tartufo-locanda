import React from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const categorieMenu = [
  {
    nome: 'Primi Piatti',
    immagine: require('../assets/menu/primi.jpg'),
    link: '/primi'
  },
  {
    nome: 'Secondi',
    immagine: require('../assets/menu/secondi.jpg'),
    link: '/secondi'
  },
  {
    nome: 'Contorni',
    immagine: require('../assets/menu/contorni.jpg'),
    link: '/contorni'
  },
  {
    nome: 'Sfizzi',
    immagine: require('../assets/menu/sfizzi.jpg'),
    link: '/sfizzi'
  }
];

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2 }}>
        <Button
          variant="outlined"
          sx={{ mb: 2 }}
          onClick={() => navigate('/')}
        >
          ← Torna alla Home
        </Button>

      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#7d1d1d', mb: 4 }}>
        Esplora il Menu
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {categorieMenu.map((cat, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card sx={{ borderRadius: 2, boxShadow: 4 }}>
              <CardActionArea onClick={() => navigate(cat.link)}>
                <CardMedia
                  component="img"
                  height="180"
                  image={cat.immagine}
                  alt={cat.nome}
                />
                <CardContent>
                  <Typography variant="h6" align="center" sx={{ color: '#333' }}>
                    {cat.nome}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
