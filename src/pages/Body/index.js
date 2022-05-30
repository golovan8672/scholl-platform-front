import React from "react"
import Header from "../../components/Header"
import s from './Body.scss'
import ws from 'isomorphic-style-loader/withStyles'

const Body = ({children}) => {
    const [role, setRole] = React.useState('admin');

    return (
        <div className={s.wrapper}>
            <Header setRole={setRole} />
            <div className={s.container}>
            {children}
            </div>
        </div>
    )
}

export default ws(s)(Body)