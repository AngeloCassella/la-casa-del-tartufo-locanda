import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ backgroundColor: '#f7f0e5', minHeight: '100vh', m: 0, p: 0 }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
