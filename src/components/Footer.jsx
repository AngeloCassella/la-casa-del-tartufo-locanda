import React from 'react';
import {Box, Typography, Link, Divider, Grid} from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#3f3f3f', color: '#fff', px: 2, py: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        {/* ORARIO */}
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Typography variant="caption" display="block" fontWeight="bold">🕒 Orario</Typography>
          <Typography variant="caption">Gio–Dom: 19:00–00:00</Typography>
        </Grid>

        {/* DIVIDER */}
        <Grid item>
          <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: 'rgba(255,255,255,0.3)' }} />
        </Grid>

        {/* CONTATTI */}
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Typography variant="caption" display="block" fontWeight="bold">📞 Contatti</Typography>
          <Link href="tel:3400663113" color="inherit" underline="hover" variant="caption">
            340 066 3113
          </Link>
        </Grid>

        {/* DIVIDER */}
        <Grid item>
          <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: 'rgba(255,255,255,0.3)' }} />
        </Grid>

        {/* SEDE */}
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Typography variant="caption" display="block" fontWeight="bold">🏠 Sede</Typography>
          <Link
            href="https://maps.app.goo.gl/2NGKhGkkinXQNaHh7"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
            variant="caption"
            sx={{ whiteSpace: 'pre-line' }}
          >
            {"Via S. Giovanni,\nCusano Mutri (BN)"}
          </Link>
        </Grid>
      </Grid>

      {/* COPYRIGHT */}
      <Box mt={2} textAlign="center">
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 1 }} />
        <Typography
          variant="caption"
          sx={{ whiteSpace: 'pre-line' }}
        >
          © {new Date().getFullYear()} La Casa del Tartufo Locanda{"\n"}P.IVA: 12345678901
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
