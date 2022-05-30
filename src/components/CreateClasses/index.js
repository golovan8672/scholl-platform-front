import React, {Component} from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
import { ValidatorForm } from 'react-material-ui-form-validator';
// import s from './CreateUser.scss'
import ws from 'isomorphic-style-loader/withStyles'
import { Grid, Button } from '@mui/material';
import { inject } from 'mobx-react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

@inject(({ClassroomsStore}) => {
  return {
    classrooms: ClassroomsStore.classrooms,
    classNumber: ClassroomsStore.classNumber,
    setClassNumber: ClassroomsStore.setClassNumber,
    addClassroom: ClassroomsStore.addClassroom
  }
})



class CreateClasses extends Component {
    render(){
    const {
        classrooms,
        classNumber,
        setClassNumber,
        addClassroom
    } = this.props

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
        
    return (
      <div>
        <ValidatorForm onSubmit={() => addClassroom()}>
          <Box sx={{marginBottom: '20px'}}>
            <Grid container spacing={3} alignItems="center">
              <Grid item md={2} sm={2} xs={12}>
                Класс:
              </Grid>
              <Grid item md={10} sm={10} xs={12}>
                <TextValidator
                  label="Класс"
                  type="text"
                  name="class"
                  size="small"
                  fullWidth
                  required
                  variant="outlined"
                  value={classNumber || ''}
                  onChange={(event) => setClassNumber(event.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: '100%', marginRight: '10px',marginBottom: '20px'}}>
            <Typography variant={'h6'} sx={{marginBottom: '10px'}}>{'Созданные классы'}</Typography>
            <Stack 
               spacing={2} 
               sx={{background: 'ghostwhite', padding: '10px'}}>
               {classrooms.map(({classNumber}) => 
                 <Item>{`Номер класса: ${classNumber}`}</Item>
               )}
            </Stack>
         </Box>
          <div>
            <Button
              color="primary"
              variant="contained"
              type="submit"
            >
              Создать класс
            </Button>
          </div>
        </ValidatorForm>
      </div>
    );
  }
};

export default CreateClasses;