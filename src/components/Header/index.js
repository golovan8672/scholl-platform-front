import { Box, IconButton } from '@mui/material';
// import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import s from './Header.scss'
import ws from 'isomorphic-style-loader/withStyles'

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.menu}>
          <Link to='/'>
            <IconButton aria-label="menu"/>
          </Link>
        </div>
        <div className={s.profile}>
        </div>
      </div>
    </div>
=======
import classes from './Header.scss'
// import ws from 'isomorphic-style-loader/withStyles'

const Header = () => {
  return (
    <Box sx={{
      height: 80,
      top: 0,
      transition: 'all 0.3s ease',
      backgroundColor: '#222A45',
      opacity: 0.8
    }}
    >
      <Box>
        <Box>
          <Link to='/'>
            <IconButton aria-label="menu"/>
          </Link>
        </Box>
        <Box>
        </Box>
      </Box>
    </Box>
>>>>>>> 7c274ab5de052741650db424bdc68574db5dce1f
  );
};

export default ws(s)(Header);