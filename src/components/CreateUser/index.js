import React, {Component} from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
import { ValidatorForm } from 'react-material-ui-form-validator';
import s from './CreateUser.scss'
import ws from 'isomorphic-style-loader/withStyles'
import { Grid, Button } from '@mui/material';
import { inject } from 'mobx-react';

@inject(({ AuthStore }) => {
  return {
    changeHandler: AuthStore.changeHandler,
    registerHandler: AuthStore.registerHandler,
    userData: AuthStore.userData
  }
})

class CreateUser extends Component {
  render(){
    const {
        userData,
        registerHandler,
        changeHandler,
        role
      } = this.props

    return (
      <div>
        <ValidatorForm onSubmit={() => registerHandler(role)}>
          <div className={s.userInfo}>
            <Grid container spacing={3} alignItems="center">
              <Grid item md={2} sm={2} xs={12}>
                ФИО
              </Grid>
              <Grid item md={10} sm={10} xs={12}>
                <TextValidator
                  label="ФИО"
                  type="text"
                  name="fio"
                  size="small"
                  fullWidth
                  required
                  variant="outlined"
                  value={userData?.fio || ''}
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={12}>
                Логин
              </Grid>
              <Grid item md={10} sm={10} xs={12}>
                <TextValidator
                  label="Логин"
                  name="login"
                  size="small"
                  fullWidth
                  required
                  type="login"
                  variant="outlined"
                  value={userData?.login || ''}
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item md={2} sm={2} xs={12}>
                Email
              </Grid>
              <Grid item md={10} sm={10} xs={12}>
                <TextValidator
                  label="Email"
                  name="email"
                  size="small"
                  fullWidth
                  required
                  type="email"
                  variant="outlined"
                  value={userData?.email || ''}
                  onChange={changeHandler}
                />
              </Grid>
              {role === 'teacher' && (
              <React.Fragment>
                <Grid item md={2} sm={2} xs={12}>
                  Предмет
                </Grid>
                <Grid item md={10} sm={10} xs={12}>
                  <TextValidator
                    label="Предмет"
                    name="subject"
                    size="small"
                    fullWidth
                    required
                    type="subject"
                    variant="outlined"
                    value={userData?.subject || ''}
                    onChange={changeHandler}
                  />
                </Grid>
              </React.Fragment>
              )}
              <Grid item md={2} sm={2} xs={12}>
                Пароль
              </Grid>
              <Grid item md={10} sm={10} xs={12}>
                <TextValidator
                  label="Пароль"
                  name="password"
                  type='password'
                  size="small"
                  fullWidth
                  required
                  variant="outlined"
                  value={userData?.password || ''}
                  onChange={changeHandler}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Button
              color="primary"
              variant="contained"
              type="submit"
            >
              Создать
            </Button>
          </div>
        </ValidatorForm>
      </div>
    );
  }
};

export default ws(s)(CreateUser);