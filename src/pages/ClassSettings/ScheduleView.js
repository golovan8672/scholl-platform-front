import React, { useState } from 'react';
import {inject} from 'mobx-react';
import { Box,Select,Stack,MenuItem,Button, Paper, Typography} from '@mui/material';
import { subjects } from '../../mock/subjects';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '20px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ScheduleView = (props) => {

  const {schedule, updateSchedule, classNumber} = props;

  const weeksNumbers = [1,2,3,4,5,6]
  const daysTitles = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

  let [selectedDay, setDay] = useState(null)
  let [selectedWeek, setWeek] = useState(null)

  let [firstSubject, setFirstSubject] = useState(null)
  let [secondSubject, setSecondSubject] = useState(null)
  let [thirdSubject, setThirdSubject] = useState(null)
  let [fourthSubject, setFourthSubject] = useState(null)
  let [fifthSubject, setFifthSubject] = useState(null)
  let [sixthSubject, setSixthSubject] = useState(null)


  let handleSelectedDay = (e) => setDay(e.target.value);
  let handleSelectedWeek = (e) => setWeek(e.target.value);
  let handleFirstSubject = (e) => setFirstSubject(e.target.value)
  let handleSecondSubject = (e) => setSecondSubject(e.target.value)
  let handleThirdSubject = (e) => setThirdSubject(e.target.value)
  let handleFourthSubject = (e) => setFourthSubject(e.target.value)
  let handleFifthSubject = (e) => setFifthSubject(e.target.value)
  let handleSixthSubject = (e) => setSixthSubject(e.target.value)

  const selectedDaySubjects = () => {
    switch (selectedDay) {
      case 'Понедельник':
        return schedule.days.Mon.subjects
      case 'Вторник':
        return schedule.days.Tue.subjects
      case 'Среда':
        return schedule.days.Wed.subjects
      case 'Четверг':
        return schedule.days.Thu.subjects
      case 'Пятница':
        return schedule.days.Fri.subjects
      case 'Суббота':
        return schedule.days.Sat.subjects
      default:
        return schedule.days.Mon.subjects
    }
  }

    return (
      <React.Fragment>
        <Box>
          <Box sx={{width: '100%'}}>
            <Select
              value={selectedDay}
              onChange={handleSelectedDay}
              sx={{width: '200px'}}
            >
              {daysTitles.map((day) => 
                 <MenuItem value={day}>{day}</MenuItem>
               )}
            </Select>
          </Box>
            <Stack 
                spacing={2} 
                sx={{background: 'ghostwhite', display: 'flex', marginTop: '20px', padding: '10px'}}>
                  <React.Fragment>
                    <Typography variant={'h4'} sx={{marginBottom: '10px'}}>{selectedDay}</Typography> 
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{maxWidth: '300px', marginRight: '10px'}}>
                           {'8:00 - 8:40'}
                         </div>
                         <Select
                            value={firstSubject || selectedDaySubjects[0]}
                            onChange={handleFirstSubject}
                            sx={{width: '200px'}}
                          >
                            {subjects.map((subject) => 
                               <MenuItem value={subject}>{subject}</MenuItem>
                             )}
                        </Select>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{maxWidth: '300px', marginRight: '10px'}}>
                           {`9:00 - 9:40`}
                         </div>
                         <Select
                            value={secondSubject || selectedDaySubjects[2]}
                            onChange={handleSecondSubject}
                            sx={{width: '200px'}}
                          >
                            {subjects.map((subject) => 
                               <MenuItem value={subject}>{subject}</MenuItem>
                             )}
                        </Select>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{maxWidth: '300px', marginRight: '10px'}}>
                           {`10:00 - 10:40`}
                         </div>
                         <Select
                            value={thirdSubject || selectedDaySubjects[3]}
                            onChange={handleThirdSubject}
                            sx={{width: '200px'}}
                          >
                            {subjects.map((subject) => 
                               <MenuItem value={subject}>{subject}</MenuItem>
                             )}
                        </Select>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{maxWidth: '300px', marginRight: '10px'}}>
                           {`11:00 - 11:40`}
                         </div>
                         <Select
                            value={fourthSubject || selectedDaySubjects[4]}
                            onChange={handleFourthSubject}
                            sx={{width: '200px'}}
                          >
                            {subjects.map((subject) => 
                               <MenuItem value={subject}>{subject}</MenuItem>
                             )}
                        </Select>
                       </Box>
                     </Item>
                     <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{maxWidth: '300px', marginRight: '10px'}}>
                           {`12:00 - 12:40`}
                         </div>
                         <Select
                            value={fifthSubject || selectedDaySubjects[5]}
                            onChange={handleFifthSubject}
                            sx={{width: '200px'}}
                          >
                            {subjects.map((subject) => 
                               <MenuItem value={subject}>{subject}</MenuItem>
                             )}
                        </Select>
                       </Box>
                     </Item>
                      <Item>
                       <Box sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-around'
                         }}>
                         <div style={{maxWidth: '300px', marginRight: '10px'}}>
                           {`13:00 - 13:40`}
                         </div>
                         <Select
                            value={sixthSubject || selectedDaySubjects[6]}
                            onChange={handleSixthSubject}
                            sx={{width: '200px'}}
                          >
                            {subjects.map((subject) => 
                               <MenuItem value={subject}>{subject}</MenuItem>
                             )}
                        </Select>
                       </Box>
                     </Item>
                     <Button
                        variant="contained"
                        onClick={() => updateSchedule(schedule.id, selectedDay, [firstSubject, secondSubject, thirdSubject, fourthSubject, fifthSubject, sixthSubject])}
                      >
                        Сформировать расписание
                      </Button>
                     </React.Fragment>
              </Stack>
        </Box>
      </React.Fragment>
    )
  }

export default ScheduleView;

