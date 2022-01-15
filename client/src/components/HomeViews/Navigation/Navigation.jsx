import React from 'react';

// import { Link } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CallIcon from '@mui/icons-material/Call';


// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';


function Navigation() {

  return (
    <AppBar position="fixed" color='primary' style={{background: `linear-gradient(45deg, #13547a, #80d0c7)`, color:'#FFE4B5', textShadow: `1px 1px 2px pink`}}>
      <Toolbar>
        <IconButton edge="start"
          color="inherit">
          <MenuIcon />
          {/* <div>
      <Link to='/'> Home </Link>
    </div> */}
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}> Costantino </Typography>
        <CallIcon></CallIcon>
        <Button color="inherit" size='small'>
          8-812-777-777-77
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
