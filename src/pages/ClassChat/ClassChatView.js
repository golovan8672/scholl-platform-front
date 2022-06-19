import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
    Fab,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Avatar,
    Divider,
    TextField,
    Box
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; 
import Body from '../Body'  

const ClassChatView = ({students, user, teachers, chat, addMessage}) => {

    var options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      }
      
    const getDate = (str) =>  {
        let date = new Date(str);
        return date.toLocaleString('ru', options)
    }

    const dateNow = new Date().toLocaleString()

    const [message, setMessage] = React.useState('')

    const teacher = teachers.find(({classNumber}) => classNumber === chat.classNumber)

    return (
        <Body>
         <Box>
            <Grid 
                container
                component={Paper} 
                sx={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <Grid item xs={3} sx={{borderRight: '1px solid #e0e0e0', width: '1000px'}}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                            <Avatar />
                            </ListItemIcon>
                            <ListItemText primary={user.fio}></ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <Typography variant='h5' sx={{padding: '20px'}}>{'Классный руководитель'}</Typography>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <Avatar />
                        </ListItemIcon>
                        <ListItemText>{teacher?.fio}</ListItemText>
                    </ListItem>
                    <Divider />
                    <Typography variant='h5' sx={{padding: '20px'}}>{'Мои одноклассники'}</Typography>
                    <Divider />
                    <List>
                        {
                        students.map(({fio}) => {
                         if (fio !== user.fio) {
                        return (
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar />
                                </ListItemIcon>
                                <ListItemText>{fio}</ListItemText>
                            </ListItem>
                         )}
                        })}
                    </List>
                </Grid>
                <Grid item xs={9}>
                    <List 
                      sx={{
                        height: '70vh',
                        overflowY: 'auto'
                      }}
                        >
                        {chat.messages?.map(({authorFio, date, message}) => {
                           const isUser = authorFio === user.fio;
                        return (
                        <ListItem key="1">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align={isUser ? 'right' : 'left'} sx={{'& span':
                                     {fontSize: '16px', fontWeight: 'bold'}
                                    }}>{authorFio}</ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align={isUser ? 'right' : 'left'} sx={{'& span':
                                     {fontSize: '16px'}
                                    }}>{message}</ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align={isUser ? 'right' : 'left'} sx={{'& span':
                                     {fontSize: '14px', fontWeight: '400', color: 'gray'}
                                    }}>{getDate(date)}</ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                         )})}
                    </List>
                    <Divider />
                    <Grid container style={{padding: '20px'}}>
                        <Grid item xs={11}>
                            <TextField id="outlined-basic-email" placeholder='Написать' fullWidth value={message} onChange={(event) => setMessage(event.target.value)} />
                        </Grid>
                        <Grid xs={1} align="right">
                            <Fab onClick={() =>{addMessage(chat.classNumber,{authorFio: user.fio, message, dateNow}), setMessage('')}} color="primary" aria-label="add"><SendIcon /></Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
          </Box>
        </Body>
    )
}

export default ClassChatView