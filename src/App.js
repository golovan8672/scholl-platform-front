import React from 'react'
import { Routes, Switch, Route, BrowserRouter } from 'react-router-dom'
// import GlobalWrapper from './core/Global';
import { Provider } from 'mobx-react';
// import configureStore from './core/configureStore'
import Home from './pages/Home';
import Menu2 from './pages/Menu2';
import StyleContext from 'isomorphic-style-loader/StyleContext';

const App = () => {
//   const { stores } = configureStore();
const AppContext = {
  insertCss: (...styles) => {
    const removeCss = styles.map((style) => style._insertCss());

    return () => removeCss.forEach((dispose) => dispose());
  }
};



  return (
    <StyleContext.Provider value={AppContext}>
      <Provider>
          <BrowserRouter>
            <Routes>
                  <Route path={'/'} element={<Home />} />
                  {/* <Route path={'/'} element={<Menu2 />} /> */}
            </Routes>
          </BrowserRouter>
      </Provider>
    </StyleContext.Provider>
  )
}

export default App