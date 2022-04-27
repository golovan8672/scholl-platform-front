import React from "react"
import Header from "../../components/Header"
import MenuAdmin from "./MenuAdmin";
import s from './Home.scss'
import ws from 'isomorphic-style-loader/withStyles'

const role = 'admin';

const Home = () => {
    return (
        <div className={s.wrapper}>
            <Header />
            <div className={s.container}>
            {
                role === 'admin' ?
                <MenuAdmin /> :
                <MenuUser />
            }
            </div>
        </div>
    )
}

export default ws(s)(Home)