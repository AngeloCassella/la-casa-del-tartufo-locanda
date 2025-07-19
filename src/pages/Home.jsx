import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import welcomeImage from '../assets/menu/fotoDiBenvenuto.jpeg';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate(); // ✅ per navigare tra le pagine

  return (
    <Box textAlign="center" py={4} sx={{ width: '100%' }}>
      <img
        src={welcomeImage}
        alt="Benvenuto"
        style={{ width: '90%', maxWidth: '700px', borderRadius: 8 }}
      />

      <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
        Benvenuti alla Locanda "La Casa del Tartufo Locanda"
      </Typography>

      <Stack spacing={2} mt={3} px={2}>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#e0e0e0', color: '#000' }}
          onClick={() => navigate('/menu')}
        >
          MENU
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#e0e0e0', color: '#000' }}
          onClick={() => navigate('/vini')}
        >
          CARTA DEI VINI
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#e0e0e0', color: '#000' }}
          onClick={() => navigate('/bevande')}
        >
          BEVANDE
        </Button>

        <Button
          variant="contained" fullWidth
          sx={{ backgroundColor: '#e0e0e0', color: '#000' }}
          onClick={() => navigate('/camere')}
        >
          CAMERE
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
