import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Box } from '@mui/material';
import Bevande from './pages/Bevande'; // in alto tra gli import
import Vini from './pages/Vini'; // in alto tra gli import
import Menu from './pages/Menu'; // in alto tra gli import
import Primi from './pages/Primi'; // in alto tra gli import


function App() {
  return (
    <Box sx={{ backgroundColor: '#f7f0e5', minHeight: '100vh', m: 0, p: 0 }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bevande" element={<Bevande />} />
        <Route path="/vini" element={<Vini />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/primi" element={<Primi />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
