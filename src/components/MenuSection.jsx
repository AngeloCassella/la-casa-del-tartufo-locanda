import React, { useState } from 'react';
import {
  Box, Typography, Grid, Card, CardMedia, CardContent, Button, ButtonGroup
} from '@mui/material';
import menu from '../data/menu.json';

const MenuSection = () => {
  const [categoria, setCategoria] = useState('Antipasti');
  const categorie = Object.keys(menu);

  return (
    <Box px={2} pb={6}>
      <Box textAlign="center" mt={2}>
        <ButtonGroup variant="contained" sx={{ flexWrap: 'wrap' }}>
          {categorie.map((cat) => (
            <Button
              key={cat}
              onClick={() => setCategoria(cat)}
              sx={{
                m: 0.5,
                backgroundColor: categoria === cat ? '#7d1d1d' : '#3f3f3f',
                '&:hover': { backgroundColor: '#5e1212' }
              }}
            >
              {cat}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      <Typography variant="h4" sx={{ mt: 4, mb: 2, color: '#7d1d1d' }}>
        {categoria}
      </Typography>

      <Grid container spacing={3}>
        {menu[categoria].map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="180"
                image={require(`../assets/menu/${item.immagine}`)}
                alt={item.nome}
              />
              <CardContent>
                <Typography variant="h6">{item.nome}</Typography>
                <Typography variant="body2">{item.descrizione}</Typography>
                <Typography variant="subtitle2" sx={{ mt: 1, color: '#7d1d1d' }}>
                  {item.prezzo}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuSection;
