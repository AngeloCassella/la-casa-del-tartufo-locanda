//import React from "react";
import {
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "./assets/LOGO - La casa del tartufo locanda .jpeg"; // Logo nella cartella assets

const theme = createTheme({
  palette: {
    primary: { main: "#5d3a00" }, // marrone legno
    secondary: { main: "#a12424" }, // rosso vino
  },
  typography: {
    fontFamily: "'Roboto Slab', serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box
            component="img"
            src={logo}
            alt="Logo La Casa del Tartufo Locanda"
            sx={{ height: 64, mr: 2 }}
          />
          <Typography variant="h6" component="div">
            La Casa del Tartufo Locanda
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom color="primary">
            Benvenuti!
          </Typography>
          <Typography variant="body1">
            La Casa del Tartufo è una locanda nel cuore di Cusano Mutri. Offriamo vini selezionati,
            cucina locale con tartufo e quattro camere matrimoniali per il tuo soggiorno.
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
