import { inject } from 'mobx-react';
import React, { Component } from 'react';
import Login from './Login';

@inject(({ AuthStore }) => {
  return {
    changeHandler: AuthStore.changeHandler,
    loginHandler: AuthStore.loginHandler,
    userData: AuthStore.userData,
    isAuthenticated: AuthStore.isAuthenticated,
  }
})

class LoginComponent extends Component {
  render() {
    const {
      changeHandler,
      loginHandler,
      userData,
      isAuthenticated,
    } = this.props;

    return (
      <React.Fragment>
        <Login
          changeHandler={changeHandler}
          loginHandler={loginHandler}
          userData={userData}
          isAuthenticated={isAuthenticated}
        />
      </React.Fragment>
    )
  }
}

export default LoginComponent;

