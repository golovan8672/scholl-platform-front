import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'
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
  );
};

export default ws(s)(Header);