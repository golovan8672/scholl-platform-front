import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Typography} from '@mui/material';
import Body from '../Body'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
    color: theme.palette.text.secondary,
  }));

  

const TasksTeacherView = ({tasks}) => {
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
                     <Box sx={{display: 'flex', marginBottom: '20px', justifyContent: 'space-between'}}>
                        <Typography variant={'h4'} sx={{marginBottom: '10px'}}>{'Все задания'}</Typography>
                        <Link to={'/addTask'}>
                        <Button
                            variant="contained"
                        >
                        
                            Добавить задание
                        </Button>
                        </Link>
                    </Box>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                        {tasks.map(({taskTitle, classNumber, id: taskId}) => {
                        return (
                        <Link to={`/task/${taskId}`}>
                        <Item>
                            <span style={{fontSize: '18px', width: '800px'}}>Тема: {taskTitle}</span>
                            <span style={{fontSize: '18px', width: '400px'}}>Класс: {classNumber}</span>
                        </Item>
                        </Link>
                        )})}
                    </Stack>
                  </Box>
            </Grid>
        </Body>
    )
}

export default TasksTeacherView