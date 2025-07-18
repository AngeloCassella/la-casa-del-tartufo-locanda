import React from "react";
import { Container, Typography, Grid, Card, CardMedia } from "@mui/material";
import galleriaData from "../data/galleria.json";

export default function Galleria() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Galleria</Typography>
      <Grid container spacing={2}>
        {galleriaData.map((foto, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" height="200" image={`./img/${foto.immagine}`} alt={foto.titolo} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
