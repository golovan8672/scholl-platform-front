import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Typography, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import Body from '../Body'
import { styled } from '@mui/material/styles';
import {subjects} from '../../mock/subjects'
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary,
  }));

  

const TasksStudentView = ({tasks, homeworks}) => {

    const [subject, setSubject] = React.useState('');
      
    const handleSubject = (event) => {
      setSubject(event.target.value);
    };
    

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
                    <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                        <Typography variant={'h4'}>{'Все задания'}</Typography>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-helper-label">Предмет</InputLabel>
                          <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={subject}
                          label={"Предмет"}
                          sx={{width: '200px'}}
                          onChange={(event) => handleSubject(event)}
                          >
                            {subjects.map((currentSubject) => 
                              <MenuItem value={currentSubject}>{currentSubject}</MenuItem>
                            )}
                          </Select>
                        </FormControl>
                        
                    </Box>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                        {tasks.map(({taskTitle, subject: currentSubject, id: taskId}) => {
                        
                        if (currentSubject === subject) {
                            const homeworkData = homeworks.find((homework) => {
                                console.log(homework)
                                if (taskId === homework.taskId) {
                                    return {mark: homework.mark, status: homework.status}
                                }
                            })

                            // console.log(homeworkData)
                            
                            return (
                              <Link to={`/task/${taskId}`}>
                                <Item>
                                    <span style={{fontSize: '18px', width: '600px'}}>Тема: {taskTitle}</span>
                                    <span style={{fontSize: '18px', width: '400px'}}>Предмет: {subject}</span>
                                    <span style={{fontSize: '18px', width: '400px'}}>Статус: {homeworkData?.status || 'Не сделано'}</span>
                                    <span style={{fontSize: '18px', width: '400px'}}>Оценка: {homeworkData?.mark || ''}</span>
                                </Item>
                              </Link>
                        )}})}
                    </Stack>
                  </Box>
            </Grid>
        </Body>
    )
}

export default TasksStudentView