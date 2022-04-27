import React from 'react'
import { Routes, Switch, Route, BrowserRouter } from 'react-router-dom'
// import GlobalWrapper from './core/Global';
import { Provider } from 'mobx-react';
// import configureStore from './core/configureStore'
import Menu from './pages/Menu';
import Menu2 from './pages/Menu2';

const App = () => {
//   const { stores } = configureStore();

  return (
    <Provider>
        <BrowserRouter>
          <Routes>
                <Route path={'/'} element={<Menu />} />
                {/* <Route path={'/'} element={<Menu2 />} /> */}
          </Routes>
        </BrowserRouter>
    </Provider>)
}

export default App