import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import {Typography, Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import Body from '../Body'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import {Link} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ScheduleView from './ScheduleView';

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


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

const ClassSettingsView = (props) => {

  const {
    students,
    teachers,
    classrooms,
    addStudentInClass,
    addTeacherInClass,
    deleteStudentIntoClass,
    deleteTeacherIntoClass,
    schedules,
    addSchedule,
    updateSchedule
  } = props

  
  const [expanded, setExpanded] = React.useState('panel1');
  const [classNum, setClassNumber] = React.useState('');
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  
  const handleSelect = (event) => {
    setClassNumber(event.target.value);
  };
  
  const schedule = schedules.find(({classNumber}) => classNumber === classNum)

  console.log(schedule, schedules)

  const scheduleView = schedule ? (
  <ScheduleView 
    classNumber={classNum}
    schedule={schedule}
    addSchedule={addSchedule}
    updateSchedule={updateSchedule}
  />
  ) : (
  <Button
    sx={{
      maxWidth: '220px',
     }}
    variant="contained"
    onClick={() => addSchedule(classNum)}
  >
    Создать расписание расписание
  </Button>
  )
  const [tabsValue, setTabsValue] = React.useState('one');

  const handleChangeTabs = (event, newValue) => {
    setTabsValue(newValue);
  };

  const isHaveTeacher = teachers.some(({classNumber}) => classNumber === classNum)

    return (
        <Body>
            <Grid item md={7} sx={{width: '100%'}}>
                <Accordion defaultExpanded={false} sx={{ marginBottom: '1.5rem' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Не расформированные ученики</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                       {students.map(({fio, login, email, classNumber, id: studentId}) => {
                         if (!classNumber) {
                           return (
                            <Item>
                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around'
                                }}>
                                <div style={{maxWidth: '400px'}}>
                                  {`ФИО: ${fio}, Логин: ${login}, Почта: ${email}`}
                                </div>
                                {classNum && 
                                    <Button
                                       color="primary"
                                       variant="contained"
                                       onClick={() => addStudentInClass(studentId, classNum)}
                                         >
                                       Добавить ученика в класс
                                    </Button>
                                }
                              </Box>
                            </Item>
                           )                   
                         }
                        })}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded={false} sx={{ marginBottom: '1.5rem' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Не расформированные учителя</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                       {teachers.map(({fio, login, email, subject, classNumber, id: teacherId}) => {
                         if (!classNumber) {
                           return (
                             <Item>
                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around'
                                }}>
                                  <div style={{maxWidth: "410px"}}>
                                    {`ФИО: ${fio}, Логин: ${login}, Почта: ${email}, Предмет: ${subject}`}
                                  </div>
                                  { !isHaveTeacher && ( 
                                  <Button
                                      color="primary"
                                      variant="contained"
                                      onClick={() => addTeacherInClass(teacherId, classNum)}
                                    >
                                      Сделать классным руководителем
                                  </Button>
                                  )}
                              </Box>
                             </Item>
                           )
                         }
                       })}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Box sx={{ maxWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Класс</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={classNum}
                      label="Класс"
                      onChange={(event) => handleSelect(event)}
                    >
                      {classrooms.map(({classNumber}) => 
                         <MenuItem value={classNumber}>{classNumber}</MenuItem>
                       )}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{margin: '20px 0'}}>
                <Tabs
                  value={tabsValue}
                  onChange={handleChangeTabs}
                >
                  <Tab
                    value="one"
                    label="Классый состав"
                  />
                  <Tab value='two' label="Расписание" />
                </Tabs>
                </Box>
                <Grid 
                sx={{ 
                  display: 'flex',
                  alignItemsr: 'center',
                  cursor: 'pointer',
                  width: '100%'
                }} 
                item md={5}>
                { 
                  tabsValue === 'one' ?
                  <React.Fragment>
                  <Box sx={{ width: '100%', marginRight: '10px' }}>
                    <Typography variant={'h4'} sx={{marginBottom: '10px'}}>{'Ученики'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                       {students.map(({classNumber, fio, login, email, id: studentId}) =>
                        { 
                          if (classNum && classNum === classNumber) {
                            return (
                            <Item>
                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around'
                                }}>
                                <div style={{maxWidth: '300px'}}>
                                  {`ФИО: ${fio}, Логин: ${login}, Почта: ${email}`}
                                </div>
                                <Button
                                   color="error"
                                   sx={{
                                    maxWidth: '220px',
                                    height: '40px'
                                   }}
                                   startIcon={<DeleteIcon />}
                                   variant="contained"
                                   onClick={() => deleteStudentIntoClass(studentId)}
                                     >
                                   Удалить из класса
                                </Button>
                              </Box>
                            </Item>
                            )
                          }
                        }
                       )}
                    </Stack>
                  </Box>
                  <Box sx={{ width: '100%', marginRight: '10px' }}>
                    <Typography variant={'h4'} sx={{marginBottom: '10px'}}>{'Классный руководитель'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                       {teachers.map(({classNumber, fio, login, email, subject, id: teacherId}) => 
                       { 
                          if (classNum && classNum === classNumber) {
                            return (
                              <Item>
                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around'
                                }}>
                                  <div style={{maxWidth: "300px"}}>
                                    {`ФИО: ${fio}, Логин: ${login}, Почта: ${email}, Предмет: ${subject}`}
                                  </div>
                                  <Button
                                      color="error"
                                      sx={{
                                        maxWidth: '220px',
                                        height: '40px'
                                       }}
                                      startIcon={<DeleteIcon />}
                                      variant="contained"
                                      onClick={() => deleteTeacherIntoClass(teacherId)}
                                    >
                                      Удалить из класса
                                  </Button>
                              </Box>
                              </Item>
                            )
                          }
                        })}
                    </Stack>
                  </Box>
                  </React.Fragment>
                  : scheduleView
                }
              </Grid>
            </Grid>
        </Body>
    )
}

export default ClassSettingsView