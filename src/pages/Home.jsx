import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import welcomeImage from '../assets/menu/antipasto1.jpg'; // o immagine principale

const Home = () => {
  return (
    <Box textAlign="center" py={4} sx={{ width: '100%' }}>
      <img
        src={welcomeImage}
        alt="Benvenuto"
        style={{ width: '100%', maxWidth: '700px', borderRadius: 8 }}
      />
      <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
        Benvenuti alla Locanda "La Casa del Tartufo"
      </Typography>

      <Stack spacing={2} mt={3} px={2}>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#e0e0e0', color: '#000' }}>
          MENU
        </Button>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#e0e0e0', color: '#000' }}>
          CARTA DEI VINI
        </Button>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#e0e0e0', color: '#000' }}>
          BEVANDE
        </Button>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#e0e0e0', color: '#000' }}>
          ALTRO
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
