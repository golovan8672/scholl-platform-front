import React from "react"
import MenuUser from "./MenuUser";
import MenuAdmin from "./MenuAdmin";
import Body from '../Body'

const Menu = () => {
    const [role, setRole] = React.useState('admin');
    
     return (
        <Body>
          {
            role === 'admin' ? 
                <MenuAdmin /> :
                <MenuUser />
          }
        </Body>
    )
}

export default Menu