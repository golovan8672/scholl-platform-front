import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ws from 'isomorphic-style-loader/withStyles'
import s from './MenuCard.scss'
import clsx from 'clsx'
import { Box } from '@mui/material';
import Tilt from 'react-vanilla-tilt'
import { Navigate } from 'react-router-dom';

const MenuCard = ({ card }) => {
  const {
    title,
    imageSrc,
    description
  } = card;

  return (
    <Tilt options={{ scale: 2, max: 35,  perspective: 100}}>
      <div className={s.cardWrap}>
        <div className={clsx(s.cardContainer, s.containerDef)}>
          <div className={s.content}>
            <img className={s.image} src={imageSrc} />
            <Typography>{title}</Typography>
          </div>
        </div>
      </div>
    </Tilt>

  );
}

export default ws(s)(MenuCard)
