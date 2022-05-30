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

const ClassChatView = ({students, user, teachers, chat}) => {

    // const classMatesView = students.map(({fio, classNumber, id}) => { 
    //     if (user.classNumber === classNumber && userId !== id) { 
    //         return (
    //             <Item>
    //                 <Typography variant={'h6'} sx={{marginBottom: '10px'}}>
    //                     {fio}
    //                 </Typography>
    //             </Item>
    //         )}
    //      }
    //    )

    return (
        <Body>
         <Box>
            <Grid 
                container
                component={Paper} 
                sx={{
                    width: '100%',
                    height: '80vh'
                }}
            >
                <Grid item xs={3} sx={{borderRight: '1px solid #e0e0e0'}}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                            <Avatar />
                            </ListItemIcon>
                            <ListItemText primary="John Wick"></ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <Typography variant='h5' sx={{padding: '20px'}}>{'Мои одноклассники'}</Typography>
                    <Divider />
                    <List sx={{width: '1000px'}}>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar />
                            </ListItemIcon>
                            <ListItemText>Remy Sharp</ListItemText>
                            <ListItemText secondary="online" align="right"></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar />
                            </ListItemIcon>
                            <ListItemText primary="Alice">Alice</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar />
                            </ListItemIcon>
                            <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={9}>
                    <List 
                      sx={{
                        height: '70vh',
                        overflowY: 'auto'
                      }}
                        >
                        <ListItem key="1">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="09:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="2">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="left" secondary="09:31"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="3">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="10:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                    <Divider />
                    <Grid container style={{padding: '20px'}}>
                        <Grid item xs={11}>
                            <TextField id="outlined-basic-email" placeholder='Написать' fullWidth />
                        </Grid>
                        <Grid xs={1} align="right">
                            <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
          </Box>
            {/* <Grid 
                sx={{ 
                  display: 'flex',
                  alignItemsr: 'center',
                  cursor: 'pointer',
                  width: '100%'
                }} 
                item md={5}>
                 <Box sx={{ width: '100%', marginRight: '10px' }}>
                    <Typography variant={'h4'} sx={{marginBottom: '10px'}}>{'Мои одноклассники'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                       {classMatesView}
                    </Stack>
                 </Box>
                 <Box sx={{ width: '100%', marginRight: '10px' }}>
                    <Typography variant={'h4'} sx={{marginBottom: '10px'}}>{'Чат с классным руководителем'}</Typography>
                    <Stack 
                       spacing={2} 
                       sx={{background: 'ghostwhite', padding: '10px'}}>
                        
                    </Stack>
                 </Box>
            </Grid> */}
        </Body>
    )
}

export default ClassChatView