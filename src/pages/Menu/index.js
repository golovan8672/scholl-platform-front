import React, { Component } from "react"
import MenuUser from "./MenuUser";
import MenuAdmin from "./MenuAdmin";
import Body from '../Body'
import {inject} from 'mobx-react' 

@inject(({AuthStore}) => {
  return {
    user: AuthStore.user,
  }
})
class Menu extends Component {
  render() {
    const {user} = this.props
    return (
        <Body>
          {
            user.role === 'moderator' ? 
            <MenuAdmin /> :
            <MenuUser />
          }
        </Body>
    )}
}

export default Menu