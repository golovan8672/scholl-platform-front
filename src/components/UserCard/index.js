import React from 'react';
import s from './UserCard.scss'
import ws from 'isomorphic-style-loader/withStyles'
import avatar from '../../assets/avatars/001-man.svg';
import { Typography, IconButton, Avatar, Fab } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const UserCard = () => {
  return (
    <div className={s.card}>
      <div className={s.userInfo}>
        <Avatar
          src={avatar}
          sx={{ width: 70, height: 70 }}
        />
          <Typography>Sergej Golovanov</Typography>
      </div>
      <div className={s.userDesc}>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Typography>
      </div>
      <div className={s.buttons}>
        <Fab size="medium" color="primary">
          <SettingsIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="add">
          <LogoutIcon />
        </Fab>
      </div>
    </div>
  );
};

export default ws(s)(UserCard);