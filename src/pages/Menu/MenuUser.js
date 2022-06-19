import React from "react";
import MenuCard from "../../components/MenuCard";
import ws from 'isomorphic-style-loader/withStyles'
import s from './Menu.scss'
import ocenky from '../../assets/scale_1200.jpeg'
import klass from '../../assets/klass.jpg'
import raspisanie from '../../assets/raspisanie.jpeg'
import news from '../../assets/news.png'
import {inject} from 'mobx-react';
import { Component } from "react";

@inject(({AuthStore}) => {
  return {
    user: AuthStore.user,
  }
})

class MenuUser extends Component  {
    render(){

        const {user} = this.props

        const userMenuContent = [
            {
                id: 2,
                title: 'Задания',
                imageSrc: ocenky,
                description: '/tasks'
            }
        ]

            user.classNumber && userMenuContent.push(
            {
                id: 2,
                title: 'Чат с классом',
                imageSrc: klass,
                description: '/classChat'
            },
            user.classNumber &&
            {
                id: 3,
                title: 'Расписание',
                imageSrc: raspisanie,
                description: '/schedule'
            }
        )
    
    return (
        <div className={s.card}>
            {
                userMenuContent.map((card) => {
                    return <MenuCard card={card} />
                })
            }
        </div>
    )
}}

export default ws(s)(MenuUser)