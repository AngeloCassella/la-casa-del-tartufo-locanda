import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Camere', to: '/camere' },
  { label: 'Galleria', to: '/galleria' },
  { label: 'Contatti', to: '/contatti' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4e342e' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* LOGO + NOME */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <img
            src="/img/logo/LOGO - La casa del tartufo locanda .jpeg"
            alt="Logo"
            style={{ height: 40, marginRight: 10 }}
          />
          <Typography variant="h6" noWrap>
            La Casa Del Tartufo
          </Typography>
        </Box>

        {/* MOBILE MENU ICON */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" color="inherit" onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            keepMounted
          >
            {pages.map((page) => (
              <MenuItem key={page.to} onClick={handleCloseNavMenu} component={Link} to={page.to}>
                <Typography textAlign="center">{page.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* DESKTOP MENU */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {pages.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {page.label}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
