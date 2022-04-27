import React from 'react';
import s from './Header.scss'
import ws from 'isomorphic-style-loader/withStyles'
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={s.header}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Avatar
            alt="Remy Sharp"
            // src="/static/images/avatar/1.jpg"
            sx={{ width: 40, height: 40 }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ws(s)(Header);