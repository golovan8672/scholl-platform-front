import React from "react"
import Header from "../../components/Header"
import MenuAdmin from "./MenuAdmin";
import s from './Home.scss'
import ws from 'isomorphic-style-loader/withStyles'
import MenuUser from "./MenuUser";

const Home = () => {
    const [role, setRole] = React.useState('admin');

    return (
        <div className={s.wrapper}>
            <Header setRole={setRole} />
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