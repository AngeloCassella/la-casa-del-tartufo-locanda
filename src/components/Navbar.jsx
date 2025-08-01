import React, { useState } from 'react';
import {AppBar,Toolbar,IconButton,Box,Drawer,List,ListItem,ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'; // Assicurati di avere il percorso corretto per il logo
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const TikTokIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12.94 2c.13 1.07.58 2.05 1.29 2.83a4.56 4.56 0 0 0 3.3 1.34v2.26a7.09 7.09 0 0 1-4.13-1.29v6.76a5.8 5.8 0 1 1-5.8-5.79c.41 0 .82.05 1.21.15v2.45a2.67 2.67 0 1 0 1.67 2.5V2h2.46z" />
  </SvgIcon>
);

const Navbar = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  // Funzione per tornare alla pagina precedente
  const handleGoBack = () => {
    navigate(-1);
  };

  // Funzione per tornare alla home
  const handleGoHome = () => {
    navigate('/');
  };

  const navLinks = [
    { label: 'MENU', to: '/menu' },
    { label: 'CARTA DEI VINI', to: '/vini' },
    { label: 'BEVANDE', to: '/bevande' },
    { label: 'CAMERE', to: '/' }
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#7d1d1d', m: 0 }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            minHeight: { xs: 64, sm: 80, md: 90 },
            px: 1
          }}
        >
          {/* Lato sinistro */}
          <Box display="flex" alignItems="center" gap={0.2}>
            <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <IconButton color="inherit" onClick={handleGoHome}>
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" onClick={handleGoBack}>
              <ArrowBackIcon />
            </IconButton>
          </Box>

        {/* Logo centrale cliccabile */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            cursor: 'pointer'
          }}
          onClick={handleGoHome}
        >
          <img
            src={logo}
            alt="Logo Locanda"
            style={{
              height: '100px',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: 8
            }}
          />
        </Box>

          {/* Social */}
        <Box display="flex" alignItems="center" gap={0.2}>
          <IconButton color="inherit" href="https://www.facebook.com/profile.php?id=61578689933278" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com/lacasadeltartufolocanda/" target="_blank">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.tiktok.com/@lacasadeltartufolocanda" target="_blank">
            <TikTokIcon />
          </IconButton>
        </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer laterale */}
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box width={250}>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.label} onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to={link.to} style={{ textDecoration: 'none', color: '#7d1d1d' }}>
                    {link.label}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
export default Navbar;