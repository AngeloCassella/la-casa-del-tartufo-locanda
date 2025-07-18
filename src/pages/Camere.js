import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import camereData from "../data/camere.json";

export default function Camere() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Le Nostre Camere</Typography>
      <Grid container spacing={3}>
        {camereData.map((camera, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardMedia component="img" height="160" image={`./img/${camera.immagine}`} alt={camera.nome} />
              <CardContent>
                <Typography variant="h6">{camera.nome}</Typography>
                <Typography variant="body2">{camera.descrizione}</Typography>
                <Typography variant="subtitle2" sx={{ mt: 1 }}>€ {camera.prezzo} / notte</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
