import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import Body from '../Body'
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

const AllUsersPageView = ({students, moderators, teachers}) => {

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
                    <Typography variant={'h4'} sx={{marginBottom: '10px'}}>{'Студенты'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                       {students.map(({fio, login, email, classNumber}) => 
                        <Item>{`ФИО: ${fio}, Логин: ${login}, Почта: ${email}, Класс: ${classNumber}`}</Item>
                       )}
                    </Stack>
                  </Box>
                  <Box sx={{ width: '100%', marginRight: '10px' }}>
                    <Typography variant={'h4'} sx={{marginBottom: '10px'}}>{'Учителя'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                       {teachers.map(({fio, login, email, subject}) => 
                         <Item>{`ФИО: ${fio}, Логин: ${login}, Почта: ${email}, Предмет: ${subject}`}</Item>
                       )}
                    </Stack>
                  </Box>
                  <Box sx={{ width: '100%', marginRight: '10px' }}>
                    <Typography variant={'h4'} sx={{marginBottom: '10px'}}>{'Модераторы'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                       {moderators.map(({fio, login, email}) => 
                         <Item>{`ФИО: ${fio}, Логин: ${login}, Почта: ${email}`}</Item>
                       )}
                    </Stack>
                  </Box>
            </Grid>
        </Body>
    )
}

export default AllUsersPageView