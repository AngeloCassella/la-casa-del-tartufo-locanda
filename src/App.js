// App.js - punto d'ingresso del sito
//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Camere from "./pages/Camere";
import Galleria from "./pages/Galleria";
import Contatti from "./pages/Contatti";


const theme = createTheme({
  palette: {
    primary: { main: "#5d3a00" },
    secondary: { main: "#a12424" },
  },
  typography: { fontFamily: "'Roboto Slab', serif" },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/camere" element={<Camere />} />
          <Route path="/galleria" element={<Galleria />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
