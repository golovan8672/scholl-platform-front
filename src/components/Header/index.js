import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'
import classes from './Header.scss'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.menu}>
          <Link to='/'>
            <IconButton aria-label="menu"/>
          </Link>
        </div>
        <div className={classes.profile}>
        </div>
      </div>
    </div>
  );
};

export default Header;