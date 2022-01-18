import { Container, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react';
import "./Footer.css";



function Footer() {
  return (
    <Box sx={{ backgroundColor: '#000', color: "#FFE4B5" }}>
      <Container className="footer" maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
              <Link to="/servicesandprices" color="inherit">
                Услуги и цены
              </Link></Box>
            <Box >
              <Link to="/stockprice" color="inherit">
                Акции
              </Link>
            </Box>
            <Box>
              <Link to="/" color="inherit">

              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Аккаунт</Box>
            <Box>
              <Link to="/login" color="inherit">
                Логин
              </Link>
            </Box>
            <Box>
              <Link to="/registration" color="inherit">
                Регистрация
              </Link>
            </Box>
            <Box>
              <Link to="/profile" color="inherit">
                Профиль
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Контакты</Box>
            <Box>
              Instagram
              <InstagramIcon sx={{ verticalAlign: 'bottom', marginLeft: '10px' }}
                onClick={() => window.location.assign('https://www.instagram.com')} />
            </Box>
            <Box>
              Telegram
              <TelegramIcon sx={{ verticalAlign: 'bottom', marginLeft: '14px'}}
                onClick={() => window.location.assign('https://www.telegram.com')} />
            </Box>
            <Box>
                WhatsApp
                <WhatsAppIcon sx={{ verticalAlign: 'bottom', marginLeft: '9px'}}
                onClick={() => window.location.assign('https://www.whatsup.com')} />
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 2 }}>
          Costantino &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
