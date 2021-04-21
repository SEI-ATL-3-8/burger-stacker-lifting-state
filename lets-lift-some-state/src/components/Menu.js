import { useState } from 'react'

import NewMenuItemForm from './NewMenuItemForm'
import MenuItem from './MenuItem'

const Menu = (props) => {
  return (
    <div>
      <ul className="menu">
        {props.menuItems.map((item) => {
          return <MenuItem item={item} addToBurgerStack={props.addToBurgerStack} />
        })}
      </ul>

      <NewMenuItemForm addToMenuItems={props.addToMenuItems} />
    </div>
  )
}

export default Menu