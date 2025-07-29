import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ⏳ Lazy loading per le pagine (code splitting)
const Home = lazy(() => import('./pages/Home'));
const Bevande = lazy(() => import('./pages/Bevande'));
const Vini = lazy(() => import('./pages/Vini'));
const Menu = lazy(() => import('./pages/Menu'));
const Primi = lazy(() => import('./pages/Primi'));
const Secondi = lazy(() => import('./pages/Secondi'));

function App() {
  return (
    <Box sx={{ backgroundColor: '#f7f0e5', minHeight: '100vh', m: 0, p: 0 }}>
      <Navbar />
      
      {/* Suspense mostra qualcosa mentre le pagine vengono caricate */}
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Caricamento...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bevande" element={<Bevande />} />
          <Route path="/vini" element={<Vini />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/primi" element={<Primi />} />
          <Route path="/secondi" element={<Secondi />} />
        </Routes>
      </Suspense>

      <Footer />
    </Box>
  );
}

export default App;
