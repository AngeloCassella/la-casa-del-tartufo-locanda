import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function RoomDetail({ camera, assetFolder = 'cameraStandard', backPath = '/camere' }) {
  const navigate = useNavigate();

  const getImage = (imageName) => {
    return require(`../assets/${assetFolder}/${imageName}`);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
      <Button variant="outlined" sx={{ mb: 3 }} onClick={() => navigate(backPath)}>
        ← Torna alle Camere
      </Button>

      <Typography
        variant="h3"
        align="center"
        sx={{ color: '#7d1d1d', mb: 3, fontWeight: 'bold' }}
      >
        {camera.nome}
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, mb: 4 }}>
        {camera.immagini.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={getImage(img)}
            alt={`${camera.nome} ${index + 1}`}
            loading="lazy"
            sx={{
              width: { xs: '90%', sm: 420 },
              height: { xs: 260, md: 360 },
              objectFit: 'cover',
              borderRadius: 4,
              boxShadow: 3,
              flexShrink: 0
            }}
          />
        ))}
      </Box>

      <Box sx={{ background: 'white', borderRadius: 4, boxShadow: 4, p: { xs: 2, md: 4 } }}>
        <Typography variant="h5">Descrizione</Typography>
        <Typography sx={{ my: 2 }}>{camera.descrizione}</Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
          <Chip label={camera.dimensione} />
          <Chip label={camera.ospiti} />
          <Chip label={camera.letto} />
        </Box>

        <Typography variant="h6">Bagno privato</Typography>
        <Typography sx={{ mb: 2 }}>{camera.bagno}</Typography>

        <Typography variant="h6">Balcone</Typography>
        <Typography sx={{ mb: 2 }}>{camera.balcone}</Typography>

        <Typography variant="h6">Servizi disponibili</Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 2 }}>
          {camera.servizi.map((service, index) => (
            <Chip key={index} label={service} />
          ))}
        </Box>

        <Typography variant="h4" sx={{ color: '#7d1d1d', fontWeight: 'bold', mt: 4 }}>
          {camera.prezzo}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            background: '#7d1d1d',
            fontSize: 18,
            py: 1.5,
            borderRadius: 3
          }}
        >
          Richiedi disponibilità
        </Button>
      </Box>
    </Box>
  );
}

export default RoomDetail;