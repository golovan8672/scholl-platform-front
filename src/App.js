import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
// import GlobalWrapper from './core/Global';
import { Provider } from 'mobx-react';
import configureStore from './core/configureStore'

const App = () => {
  const { stores } = configureStore();

  return (
    <Provider {...stores}>
          <GlobalCss />
          <Router>
              <GlobalWrapper>
                <Switch>
                  
                </Switch>
              </GlobalWrapper>
          </Router>
    </Provider>)
}

export default App