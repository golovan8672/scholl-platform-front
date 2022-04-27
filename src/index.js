import React from 'react' 
import {render} from 'react-dom';
import ws from 'isomorphic-style-loader/withStyles'
import s from './style.scss'
import App from './App'

render(<App />, document.getElementById('app'))

export default ws(s)(App)
