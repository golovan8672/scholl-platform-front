import React from "react"
import Header from "../../components/Header"
import MenuAdmin from "./MenuAdmin";
import s from './Home.scss'
import ws from 'isomorphic-style-loader/withStyles'

const role = 'user';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={s.container}>
            {
                role === 'user' ?
                <MenuAdmin /> :
                <MenuUser />
            }
            </div>
        </React.Fragment>
    )
}

export default ws(s)(Home)