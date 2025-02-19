import React from 'react';
import { Box, Container, Grid, Typography, Divider, useMediaQuery } from '@mui/material';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import PopularItems from './PopularItems';
import PromocionSection from './PromocionSection';

interface ProductosProps {
  addToCart: (productId: number, products: any[]) => void;
}


const Main: React.FC<ProductosProps> = ({ addToCart }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
 

  return (
    <div style={{
      backgroundImage: "./public/background.jpg",
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundColor: '#F5F5DC',
  }}>
      <Container sx={{ my: 4 }} >
        
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontSize: isMobile ? '1.85rem' : '3rem', fontWeight: 'semibold' }}
            >
              El Buen Sabor: Sabrosuras y más...
            </Typography>
            <Typography variant="body1" paragraph>
            Ahora... ¡TAMBIÉN A DOMICILIO!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://thefoodtech.com/wp-content/uploads/2023/08/delivery-alimentos-bebidas.jpg"
              alt="Comida Rápida"
              style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
            />
          </Grid>
        </Grid>
        
      </Container>
      <Box sx={{ my: 4 }}>
        <Divider />
      </Box>
      <Box sx={{ my: 7 }}>
        <PopularItems addToCart={addToCart} />
      </Box>

     

      <Box sx={{ my: 4 }}>
        <PromocionSection addToCart={addToCart} />
      </Box>
      
     
      <Container sx={{ my: 4 }}>
        <TestimonialsSection />
      </Container>
      
      <Container sx={{ my: 4 }}>
        <ContactSection />
      </Container>
    </div>
  );
};

export default Main;
