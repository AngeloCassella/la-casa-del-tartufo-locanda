import React from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import menuData from "../data/menu.json";

export default function Menu() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Il Nostro Menu</Typography>
      {menuData.map((categoria) => (
        <div key={categoria.categoria}>
          <Typography variant="h5" sx={{ mt: 3 }}>{categoria.categoria}</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {categoria.piatti.map((piatto, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{piatto.nome}</Typography>
                    <Typography variant="body2">{piatto.descrizione}</Typography>
                    <Typography variant="subtitle2" sx={{ mt: 1 }}>€ {piatto.prezzo}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
}
