import React from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
import { ValidatorForm } from 'react-material-ui-form-validator';
import s from './CreateUser.scss'
import ws from 'isomorphic-style-loader/withStyles'
import { Grid, Button } from '@mui/material';

const CreateUser = ({userInfo, userRole}) => {

  // TODO В зависисмости от роли добавить/убрать поля
  return (
    <div>
      <ValidatorForm onSubmit={() => registerUser()}>
        <div className={s.userInfo}>
          <Grid container spacing={3} alignItems="center">
            <Grid item md={2} sm={2} xs={12}>
              Имя
            </Grid>
            <Grid item md={10} sm={10} xs={12}>
              <TextValidator
                label="Имя"
                type="text"
                name="firstName"
                size="small"
                fullWidth
                required
                variant="outlined"
                value={userInfo?.firstName || ''}
                // onChange={userHandler}
              />
            </Grid>
            <Grid item md={2} sm={2} xs={12}>
              Фамилия
            </Grid>
            <Grid item md={10} sm={10} xs={12}>
              <TextValidator
                label="Фамилия"
                name="lastName"
                fullWidth
                required
                size="small"
                variant="outlined"
                value={userInfo?.lastName || ''}
                // onChange={userHandler}
              />
            </Grid>
            <Grid item md={2} sm={2} xs={12}>
              Телефон
            </Grid>
            <Grid item md={10} sm={10} xs={12}>
              <TextValidator
                label="Телефон"
                name="phone"
                fullWidth
                required
                size="small"
                variant="outlined"
                value={userInfo?.phone || ''}
                // onChange={userHandler}
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
                value={userInfo?.email || ''}
                // onChange={userHandler}
              />
            </Grid>
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
                value={userInfo?.password || ''}
                // onChange={userHandler}
              />
            </Grid>
          </Grid>
        </div>
        <div className>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            // onClick={() => handleClose()}
          >
            Создать
          </Button>
        </div>
      </ValidatorForm>
    </div>
  );
};

export default ws(s)(CreateUser);