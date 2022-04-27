import { Box, IconButton } from '@mui/material';
// import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom'
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
  );
};

export default Header;