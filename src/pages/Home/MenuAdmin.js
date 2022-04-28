import React from "react";
import ws from 'isomorphic-style-loader/withStyles'
import s from './Home.scss'
import { Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MenuCard from "../../components/MenuCard";
import CreateUser from "../../components/CreateUser";
import settings from '../../assets/settings.png';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: '#fff',
  boxShadow: '2px 2px 15px 5px hsla(0, 0%, 0%, .1)',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: '#fff',
  fontWeight: 'bold',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const MenuAdmin = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={7}>
        <Accordion defaultExpanded={true} sx={{ marginBottom: '1.5rem' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Регистрация учеников</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CreateUser />
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={false} sx={{ marginBottom: '1.5rem' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Регистрация учителей</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CreateUser />
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={false} sx={{ marginBottom: '1.5rem' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Регистрация модераторов</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CreateUser />
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item md={5}>
        <MenuCard card={{ title: 'Управление классами', imageSrc: settings}} />
      </Grid>
    </Grid>
  )
}

export default ws(s)(MenuAdmin)