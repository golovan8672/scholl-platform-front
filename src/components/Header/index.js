import React from 'react';
import s from './Header.scss'
import ws from 'isomorphic-style-loader/withStyles'
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Popover } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import avatar from '../../assets/avatars/001-man.svg';
import UserCard from '../UserCard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';

const Header = ({setRole}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '2rem' }}>
      <AppBar position="static">
        <Toolbar className={s.header}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AdminPanelSettingsIcon onClick={() => setRole('admin')} />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <PersonIcon onClick={() => setRole('user')} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            School Platform
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <Avatar
                src={avatar}
                sx={{ width: 40, height: 40 }}
              />

            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <UserCard />
            </Popover>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ws(s)(Header);