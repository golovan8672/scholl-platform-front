import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Typography, Select, MenuItem, InputLabel, FormControl, TextField} from '@mui/material';
import Body from '../Body'
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary,
  }));

  

const TasksStudentItem = ({tasks, user, addHomework, homeworks}) => {

    const params = useParams()

    const currentTask = tasks.find((task) => task.id === params.tasksId)

    const [answer, setAnswer] = React.useState('');
      
    const handleChangeAnswer = (event) => {
        setAnswer(event.target.value);
      };
    
    const homework = homeworks.find((homework) => homework.taskId === params.tasksId && homework.student === user.fio)

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
                    <Typography variant={'h4'} sx={{marginBottom: '20px'}}>{'Задача'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'transparent', padding: '10px'}}>
                        <Item sx={{margin: 'auto', marginBottom: '20px !important', width: '800px'}}>
                            <Typography sx={{margin: 'auto'}} variant={'h6'}>Учитель: {currentTask.teacher}</Typography>
                        </Item>
                        <Item sx={{margin: 'auto !important',  marginBottom: '20px !important', width: '800px'}}>
                        <Typography sx={{margin: 'auto'}} variant={'h6'}>Тема: {currentTask.taskTitle}</Typography>
                        </Item>
                        <Item sx={{margin: 'auto !important', width: '800px', display: 'block', marginBottom: '20px !important'}}>
                        <Typography variant={'h6'} sx={{marginBottom: '20px'}}>{'Текст задачи'}</Typography>
                            <div>
                                {currentTask.taskText}
                            </div>
                        </Item>
                        <Item sx={{margin: 'auto !important', width: '800px'}}>
                            { homework ? 
                            homework.teacherDesc || 'Комментарий от учителя не оставлен' :
                            <TextField
                              multiline
                              sx={{ m: 1, minWidth: 120, margin: 'auto', width: '600px'}}
                              rows={20}
                              placeholder='Текст ответа'
                              variant="outlined"
                              onChange={handleChangeAnswer}
                              value={answer}
                            />
                            }
                        </Item>
                    </Stack>
                    {homework ?
                     <Typography sx={{margin: 'auto'}} variant={'h6'}>Оценка: {homework.mark || 'Не выставлена'}</Typography> :
                     <Button
                         variant="contained"
                         sx={{height: '100px', width: '400px', fontSize: '20px'}}
                         onClick={() => addHomework({
                             classNumber: user.classNumber,
                             taskId: params.tasksId,
                             student: user.fio,
                             subject: currentTask.subject,
                             teacher: currentTask.teacher,
                             taskTitle: currentTask.taskTitle,
                             answerToTask: answer
                         })}
                     >
                         Отправить ответ
                     </Button>
                    }
                  </Box>
            </Grid>
        </Body>
    )
}

export default TasksStudentItem