import React from "react";
import { Container, Typography, Paper, Link } from "@mui/material";
import contattiData from "../data/contatti.json";

export default function Contatti() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>Contatti</Typography>
        <Typography variant="body1"><strong>Indirizzo:</strong> {contattiData.indirizzo}</Typography>
        <Typography variant="body1"><strong>Telefono:</strong> {contattiData.telefono}</Typography>
        <Typography variant="body1"><strong>Email:</strong> {contattiData.email}</Typography>
        <Typography variant="body1"><strong>Orari:</strong> {contattiData.orari}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <Link href={contattiData.mappa} target="_blank" rel="noopener">Visualizza mappa</Link>
        </Typography>
      </Paper>
    </Container>
  );
}
