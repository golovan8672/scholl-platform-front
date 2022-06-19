import React, { useState } from 'react';
import { Box,Select,Stack,MenuItem,Button, Paper, Typography} from '@mui/material';
import { subjects } from '../../mock/subjects';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '10px',
  marginBottom: '10px',
  width: '160px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ScheduleView = (props) => {

  const {schedule} = props;

  console.log(schedule)

    return (
      <React.Fragment>
            <Box>
            <Typography variant={'h4'} sx={{marginBottom: '10px'}}>{'Расписание'}</Typography>
            </Box>
            <Box 
                sx={{background: 'ghostwhite', display: 'flex', marginTop: '20px', marginLeft: '10px', marginRight: '10px', padding: '10px'}}>
                  <React.Fragment>
                    <Box sx={{width: '230px'}}>
                    <Typography variant={'h6'} sx={{marginBottom: '10px'}}>{schedule.days.Mon.day}</Typography>
                    <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {'8:00 - 8:40'}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Mon.subjects[0]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`9:00 - 9:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Mon.subjects[1]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`10:00 - 10:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Mon.subjects[2]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`11:00 - 11:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Mon.subjects[3]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`12:00 - 12:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Mon.subjects[4]}</span>
                        </Box>
                       </Box>
                     </Item>
                      <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`13:00 - 13:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Mon.subjects[5]}</span>
                        </Box>
                       </Box>
                     </Item> 
                    </Box>
                    <Box sx={{width: '220px'}}>
                    <Typography variant={'h6'} sx={{marginBottom: '10px'}}>{schedule.days.Tue.day}</Typography>
                    <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {'8:00 - 8:40'}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Tue.subjects[0]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`9:00 - 9:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Tue.subjects[1]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`10:00 - 10:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Tue.subjects[2]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`11:00 - 11:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Tue.subjects[3]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`12:00 - 12:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Tue.subjects[4]}</span>
                        </Box>
                       </Box>
                     </Item>
                      <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`13:00 - 13:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Tue.subjects[5]}</span>
                        </Box>
                       </Box>
                     </Item>  
                    </Box>
                    <Box sx={{width: '220px'}}>
                    <Typography variant={'h6'} sx={{marginBottom: '10px'}}>{schedule.days.Wed.day}</Typography>
                    <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {'8:00 - 8:40'}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Wed.subjects[0]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`9:00 - 9:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Wed.subjects[1]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`10:00 - 10:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Wed.subjects[2]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`11:00 - 11:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Wed.subjects[3]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`12:00 - 12:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Wed.subjects[4]}</span>
                        </Box>
                       </Box>
                     </Item>
                      <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`13:00 - 13:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Wed.subjects[5]}</span>
                        </Box>
                       </Box>
                     </Item>  
                    </Box>
                    <Box sx={{width: '220px'}}>
                    <Typography variant={'h6'} sx={{marginBottom: '10px'}}>{schedule.days.Thu.day}</Typography>
                    <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {'8:00 - 8:40'}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Thu.subjects[0]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`9:00 - 9:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Thu.subjects[1]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`10:00 - 10:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Thu.subjects[2]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`11:00 - 11:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Thu.subjects[3]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`12:00 - 12:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Thu.subjects[4]}</span>
                        </Box>
                       </Box>
                     </Item>
                      <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`13:00 - 13:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Thu.subjects[5]}</span>
                        </Box>
                       </Box>
                     </Item>  
                    </Box>
                    <Box sx={{width: '220px'}}>
                    <Typography variant={'h6'} sx={{marginBottom: '10px'}}>{schedule.days.Fri.day}</Typography>
                    <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {'8:00 - 8:40'}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Fri.subjects[0]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`9:00 - 9:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Fri.subjects[1]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`10:00 - 10:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Fri.subjects[2]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`11:00 - 11:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Fri.subjects[3]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`12:00 - 12:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Fri.subjects[4]}</span>
                        </Box>
                       </Box>
                     </Item>
                      <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`13:00 - 13:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Fri.subjects[5]}</span>
                        </Box>
                       </Box>
                     </Item>  
                    </Box>
                    <Box sx={{width: '220px'}}>
                    <Typography variant={'h6'} sx={{marginBottom: '10px'}}>{schedule.days.Sat.day}</Typography> 
                    <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {'8:00 - 8:40'}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Sat.subjects[0]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`9:00 - 9:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Sat.subjects[1]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`10:00 - 10:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Sat.subjects[2]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`11:00 - 11:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Sat.subjects[3]}</span>
                        </Box>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`12:00 - 12:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Sat.subjects[4]}</span>
                        </Box>
                       </Box>
                     </Item>
                      <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{width: '40px', marginRight: '10px'}}>
                           {`13:00 - 13:40`}
                         </div>
                         <Box
                            sx={{width: '200px'}}
                          >
                            <span>{schedule.days.Sat.subjects[5]}</span>
                        </Box>
                       </Box>
                     </Item> 
                    </Box>
                     </React.Fragment> 
              </Box>
      </React.Fragment>
    )
  }

export default ScheduleView;

