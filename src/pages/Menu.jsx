import React from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
          <Grid item key={idx}>
            <Card
              sx={{
                width: 250,          // larghezza fissa
                height: 220,         // altezza fissa
                borderRadius: 2,
                boxShadow: 4,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardActionArea
                onClick={() => navigate(cat.link)}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  image={cat.immagine}
                  alt={cat.nome}
                  sx={{
                    height: 180,
                    width: '100%',
                    objectFit: 'cover'
                  }}
                />

                <CardContent
                  sx={{
                    p: 0.5, // Riduce drasticamente il padding interno
                    mt: 'auto', // Spinge il contenuto in basso solo se serve
                    textAlign: 'center',
                    minHeight: '60px', // o anche meno
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#333',
                      fontWeight: 500,
                      lineHeight: 1.1,
                      m: 0 // nessun margine sopra/sotto
                    }}
                  >
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
