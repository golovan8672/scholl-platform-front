import React from "react";
import MenuCard from "../../components/MenuCard";
import ws from 'isomorphic-style-loader/withStyles'
import s from './Home.scss'

const userMenuContent = [
    {
        id: 1,
        title: 'Новости',
        imageSrc: 'https://img.freepik.com/free-photo/book-with-green-board-background_1150-3836.jpg?t=st=1651149490~exp=1651150090~hmac=325c211261a3bfd2869ec162d54cbf65850f6a1538624c3a59f0a41e78ae6d0c&w=1380',
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