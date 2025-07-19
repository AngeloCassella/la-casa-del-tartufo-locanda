import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function ProductCard({ product, assetFolder = 'bevande' }) {
    return (
        <Card raised sx={{ width: '100%', maxWidth: 320 }}>
            <CardMedia
                component="img"
                height="180px"
                image={require(`../assets/${assetFolder}/${product.immagine}`)}
                alt={product.nome}
            />
            <CardContent>
                <Typography gutterBottom variant="h6">
                    {product.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.descrizione}
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 1, color: '#7d1d1d' }}>
                    {product.prezzo}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ProductCard;
