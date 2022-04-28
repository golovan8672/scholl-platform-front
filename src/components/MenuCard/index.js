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

const MenuCard = ({ card }) => {
  const {
    title,
    imageSrc,
    description
  } = card;

  return (
    <Box className={s.cardWrap}>
      <Box sx={{backgroundColor: 'primary.light'}} className={clsx(s.cardContainer, s.containerDef)}>
        <Box className={s.content}>
          <img className={s.image} src={imageSrc} />
          <Typography>{title}</Typography>
        </Box>
      </Box>
    </Box>

  );
}

export default ws(s)(MenuCard)
