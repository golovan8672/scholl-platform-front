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

  

const TaskGrade = ({homeworks, setMark: addMark}) => {

    const params = useParams()

    const currentHomework = homeworks.find(({id}) => id == params.homeworkId)

    const [mark, setMark] = React.useState('');
    const [desk, setDesk] = React.useState('');
      
    const handleSelect = (event) => {
      setMark(event.target.value);
    };

    const handleChangeDesk = (event) => {
        setDesk(event.target.value);
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
                    <Typography variant={'h4'} sx={{marginBottom: '20px'}}>{'Проверка задачи'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'transparent', padding: '10px'}}>
                        <Item sx={{margin: 'auto', marginBottom: '20px !important', width: '800px'}}>
                            <Typography sx={{margin: 'auto'}} variant={'h6'}>Ученик: {currentHomework.student}</Typography>
                        </Item>
                        <Item sx={{margin: 'auto !important',  marginBottom: '20px !important', width: '800px'}}>
                        <Typography sx={{margin: 'auto'}} variant={'h6'}>Тема: {currentHomework.taskTitle}</Typography>
                        </Item>
                        <Item sx={{margin: 'auto !important', width: '800px', display: 'block', marginBottom: '20px !important'}}>
                        <Typography variant={'h6'} sx={{marginBottom: '20px'}}>{'Ответ ученика'}</Typography>
                            <div>
                                {currentHomework.answerToTask}
                            </div>
                        </Item>
                        {
                        currentHomework.mark ? <Typography variant={'h6'} sx={{marginBottom: '20px'}}>{'Оценка выставлена'}</Typography> :
                        <Item sx={{margin: 'auto !important', width: '800px'}}>
                            <TextField
                              multiline
                              sx={{ m: 1, minWidth: 120, margin: 'auto', width: '600px'}}
                              rows={10}
                              placeholder='Комментарий к оценке'
                              variant="outlined"
                              onChange={handleChangeDesk}
                            />
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">Оценка</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={mark}
                                sx={{width: '200px'}}
                                onChange={(event) => handleSelect(event)}
                                >
                                  <MenuItem value={'2'}>{'2'}</MenuItem>
                                  <MenuItem value={'3'}>{'3'}</MenuItem>
                                  <MenuItem value={'4'}>{'4'}</MenuItem>
                                  <MenuItem value={'5'}>{'5'}</MenuItem>
                                </Select>
                            </FormControl>
                        </Item>
                        }
                    </Stack>
                    {
                    currentHomework.mark ? null : 
                    <Button
                        variant="contained"
                        sx={{height: '50px', width: '400px', fontSize: '20px'}}
                        onClick={() => addMark(params.homeworkId, {teacherDesc: desk, mark})}
                    >
                        {console.log(desk, mark)}
                        Оценить домашнее задание
                    </Button>
                    }
                  </Box>
            </Grid>
        </Body>
    )
}

export default TaskGrade