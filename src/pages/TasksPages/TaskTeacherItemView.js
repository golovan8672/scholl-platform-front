import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Typography} from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Body from '../Body'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Link, useParams } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary,
  }));

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
  

const TaskTeacherItemView = ({tasks, students, homeworks}) => {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };
  
    const params = useParams()

    const currentTask = tasks.find((task) => task.id === params.tasksId)

    const currentHomeworks = homeworks.filter((homework) => homework.taskId === params.tasksId)

    const completedStudents = students.filter((student) => {
        const homework = currentHomeworks.find((homework) => homework.student === student.fio)

        console.log(student, homework)
       if (student.classNumber === currentTask.classNumber &&  homework) {
         return student
       }
    })

    console.log(completedStudents)

    const notCompletedStudents = students.filter((student) => {
      const homework = currentHomeworks.find((homework) => homework.student === student.fio)
      console.log(currentTask.classNumber === '9A')
     if (student.classNumber === currentTask.classNumber && !homework) {
       return student
     }
  })

  console.log(notCompletedStudents)

    return (
        <Body>
            <Grid 
                sx={{ 
                  display: 'flex',
                  alignItemsr: 'center',
                  cursor: 'pointer',
                  width: '100%'
                }} 
                item md={5}>
                 <Box sx={{ width: '100%', marginRight: '10px' }}>
                    <Typography variant={'h4'} sx={{marginBottom: '20px'}}>{'Статусы выполнения задачи'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'transparent', padding: '10px'}}>
                        <Item sx={{margin: 'auto !important',  marginBottom: '20px !important', width: '800px'}}>
                        <Typography sx={{margin: 'auto'}} variant={'h6'}>Тема: {currentTask.taskTitle}</Typography>
                        </Item>
                        <Item sx={{margin: 'auto !important', display: 'block', width: '800px', marginBottom: '20px !important'}}>
                        <Typography variant={'h6'} sx={{marginBottom: '20px'}}>{'Текст задачи'}</Typography>
                            <div>
                              {currentTask.taskText}
                            </div>
                        </Item>
                        <Accordion defaultExpanded={false} sx={{ width: '800px', margin: '20px auto !important' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                              <Typography>Выполнили</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Stack 
                                 spacing={2} 
                                 sx={{background: 'ghostwhite', padding: '10px'}}>
                                 {completedStudents.map(({fio}) => {
                                   const homew = homeworks.find(({student}) => student === fio)
                                     return (
                                      <Link to={`/homework/${homew.id}`}>
                                      <Item>
                                        <Box sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'space-around'
                                          }}>
                                          <div style={{maxWidth: '800px'}}>
                                            {`ФИО: ${fio}`}
                                          </div>
                                        </Box>
                                      </Item>
                                      </Link>
                                     )                   
                                  })}
                              </Stack>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded={false} sx={{ width: '800px', margin: 'auto !important' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                              <Typography>Не выполнили</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Stack 
                                 spacing={2} 
                                 sx={{background: 'ghostwhite', padding: '10px'}}>
                                 {notCompletedStudents.map(({fio}) => {
                                     return (
                                      <Item>
                                        <Box sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'space-around'
                                          }}>
                                          <div style={{maxWidth: '800px'}}>
                                            {`ФИО: ${fio}`}
                                          </div>
                                        </Box>
                                      </Item>
                                     )                   
                                  })}
                              </Stack>
                            </AccordionDetails>
                        </Accordion>
                    </Stack>
                  </Box>
            </Grid>
        </Body>
    )
}

export default TaskTeacherItemView