import React from "react";
import MenuCard from "../../components/MenuCard";
import ws from 'isomorphic-style-loader/withStyles'
import s from './Home.scss'

const userMenuContent = [
    {
        id: 1,
        title: 'Новости',
        imageSrc: '',
        description: ''
    },
    {
        id: 2,
        title: 'Мой класс',
        imageSrc: '',
        description: ''
    },{
        id: 3,
        title: 'Мое расписание',
        imageSrc: '',
        description: ''
    },{
        id: 4,
        title: 'Мои оценки',
        imageSrc: '',
        description: ''
    }
]

const MenuAdmin = () => {
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

export default ws(s)(MenuAdmin)