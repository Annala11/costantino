import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CallIcon from '@mui/icons-material/Call';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

import './Navigation.css'

const drawerWidth = Math.min(window.innerWidth, 600);

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Navigation() {

  const user = useSelector(state => state.users.user);
  const userIsAuth = !!user.id;

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='navBlockMenu' position="fixed" open={open}
        style={{
          color: '#FFE4B5',
          textShadow: `1px 1px 2px pink`
        }}>
        <Toolbar className='navBlockMenu' >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{ flexGrow: 1, marginLeft: '20px', fontSize: '25px' }}>
            <Link to='/' style={{ flexGrow: 1, fontSize: '25px', textDecoration: 'none', color: '#FFE4B5' }} > COSTANTINO </Link>
            <img className="navLogo" src="/logo.png" />
          </Typography>
          <a href="tel:+7-812-777-77-77" >
            <CallIcon>
            </CallIcon>
          </a>
          <Button color="inherit" size='small' style={{ fontSize: '15px' }}>
            7-812-777-77-77
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: "#000",
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader className='navBlockMenu'>
          <Typography variant="h6" noWrap component="div" >
            {/* <Link to='/' style={{ flexGrow: 1, textDecoration: 'none', color: '#FFE4B5' }} > Costantino </Link> */}
          </Typography>
          <IconButton style={{ color: '#FFE4B5' }} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {userIsAuth ? // Условныей рендеринг, исходя из авторозации пользователя 
          <List className='navBlockMenu'>
            {[
              { text: 'ГЛАВНАЯ', link: '/' },
              { text: 'ЗАПИСАТЬСЯ ОН-ЛАЙН', link: '/neworder' },
              { text: 'УСЛУГИ И ЦЕНЫ', link: '/servicesandprices' },
              { text: 'АКЦИИ', link: '/stockprice' },
              { text: 'О НАС', link: '/contacts' },
              { text: 'ПРОФИЛЬ', link: '/myprofile' },
              { text: 'ВЫЙТИ', link: '/logout' }
            ].map((el) => (
              <ListItem button key={el.text} onClick={handleDrawerClose}>
                <Link to={el.link}> {el.text} </Link>
              </ListItem>
            ))}
          </List> :
          <List className='navBlockMenu'>
            {[
              { text: 'ГЛАВНАЯ', link: '/' },
              { text: 'ЗАПИСАТЬСЯ ОН-ЛАЙН', link: '/neworder' },
              { text: 'УСЛУГИ И ЦЕНЫ', link: '/servicesandprices' },
              { text: 'АКЦИИ', link: '/stockprice' },
              { text: 'О НАС', link: '/contacts' },
              { text: 'ВОЙТИ', link: '/login' }
            ].map((el) => (
              <ListItem button key={el.text}>
                <Link to={el.link} onClick={handleDrawerClose} > {el.text} </Link>
              </ListItem>
            ))}
          </List>}
      </Drawer>
      <Main open={open}>
      </Main>
    </Box>
  );
}

export default Navigation;
