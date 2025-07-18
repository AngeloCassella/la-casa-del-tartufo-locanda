import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import homeData from "../data/home.json";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h3" gutterBottom>{homeData.titolo}</Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>{homeData.sottotitolo}</Typography>
        <Typography variant="body1">{homeData.descrizione}</Typography>
      </Paper>
    </Container>
  );
}
