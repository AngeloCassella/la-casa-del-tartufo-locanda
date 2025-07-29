import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

function ProductCard({ product, assetFolder = 'bevande', onClick }) {
    return (
        <Card raised sx={{ width: '100%', maxWidth: 320 }}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    component="img"
                    height="180px"
                    image={require(`../assets/${assetFolder}/${product.immagine}`)}
                    alt={product.nome}
                    loading="lazy" // ✅ carica solo quando entra nello schermo
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent
                    sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: 80
                    }}
                >
                    <Typography gutterBottom variant="h6">
                        {product.nome}
                    </Typography>
                    {product.descrizione && (
                        <Typography variant="body2" color="text.secondary">
                            {product.descrizione}
                        </Typography>
                    )}
                    {product.prezzo && (
                        <Typography variant="subtitle2" sx={{ mt: 1, color: '#7d1d1d' }}>
                            {product.prezzo}
                        </Typography>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProductCard;
