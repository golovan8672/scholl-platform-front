import React from 'react' 
import {render} from 'react-dom';
import ws from 'isomorphic-style-loader/withStyles'
import s from './style.scss'

const App = () => {
    console.log(s.bab)
    return (
    <div className={s.bab}>
        {'Hello world'}
    </div>
    )
}

render(<App />, document.getElementById('app'))

export default ws(s)(App)
