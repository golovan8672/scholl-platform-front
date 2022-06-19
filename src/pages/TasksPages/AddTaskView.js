import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Typography, Select, MenuItem, InputLabel, FormControl, TextField} from '@mui/material';
import Body from '../Body'
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary,
  }));

  

const AddTaskView = ({classNumbers, user, addTask}) => {

    const [classNum, setClassNumber] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [text, setText] = React.useState('');
      
    const handleSelect = (event) => {
      setClassNumber(event.target.value);
    };
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
      };
    const handleChangeText = (event) => {
        setText(event.target.value);
      };

      const dateNow = new Date().toLocaleString()
    
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
                    <Typography variant={'h4'} sx={{marginBottom: '20px'}}>{'Создание задачи'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'transparent', padding: '10px'}}>
                        <Item sx={{margin: 'auto', marginBottom: '20px !important', width: '800px'}}>
                            <TextField
                                id="standard-basic"
                                placeholder='Введите тему'
                                variant="outlined"
                                value={title}
                                sx={{ m: 1, width: 1000, margin: 'auto' }} 
                                onChange={handleChangeTitle}
                                />
                        </Item>
                        <Item sx={{margin: 'auto !important',  marginBottom: '20px !important', width: '800px'}}>
                        <FormControl sx={{ m: 1, minWidth: 120, margin: 'auto' }}>
                          <InputLabel id="demo-simple-select-helper-label">Класс</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={classNum}
                            label={"Класс"}
                            sx={{width: '200px'}}
                            onChange={(event) => handleSelect(event)}
                            >
                              {classNumbers.map((number) => 
                                <MenuItem value={number}>{number}</MenuItem>
                              )}
                            </Select>
                        </FormControl>
                        </Item>
                        <Item sx={{margin: 'auto !important', width: '800px'}}>
                            <TextField
                              multiline
                              sx={{ m: 1, width: '1000px', margin: 'auto'}}
                              rows={20}
                              placeholder='Текст задания'
                              variant="outlined"
                              value={text}
                              onChange={handleChangeText}
                            />
                        </Item>
                    </Stack>
                    <Button
                        variant="contained"
                        sx={{height: '100px', width: '400px', fontSize: '20px'}}
                        onClick={() => {
                            addTask({
                            publicDate: dateNow,
                            taskText: text,
                            taskTitle: title,
                            classNumber: classNum,
                            subject: user.subject,
                            teacher: user.fio
                            })
                            setTitle('')
                            setText('')
                            setClassNumber('')
                        }}
                    >
                        Добавить задание
                    </Button>
                  </Box>
            </Grid>
        </Body>
    )
}

export default AddTaskView