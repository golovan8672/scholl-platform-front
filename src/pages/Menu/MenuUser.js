import React from "react";
import MenuCard from "../../components/MenuCard";
import ws from 'isomorphic-style-loader/withStyles'
import s from './Menu.scss'
import ocenky from '../../assets/scale_1200.jpeg'
import klass from '../../assets/klass.jpg'
import raspisanie from '../../assets/raspisanie.jpeg'
import news from '../../assets/news.png'

const userMenuContent = [
    {
        id: 1,
        title: 'Новости',
        imageSrc: news,
        description: ''
    },
    {
        id: 2,
        title: 'Мой класс',
        imageSrc: klass,
        description: ''
    },{
        id: 3,
        title: 'Мое расписание',
        imageSrc: raspisanie,
        description: ''
    },{
        id: 4,
        title: 'Мои оценки',
        imageSrc: ocenky,
        description: ''
    }
]

const MenuUser = () => {
    return (
        <div className={s.card}>
            {
                userMenuContent.map((card) => {
                    return <MenuCard card={card} />
                })
            }
        </div>
    )
}

export default ws(s)(MenuUser)