import './App.css';

import { useState } from 'react'

import Menu from './components/Menu'
import StackingArea from './components/StackingArea'

const menuData = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

function App() {
  const [menuItems, setMenuItems] = useState(menuData)
  const [burgerStack, setBurgerStack] = useState([])

  const addToBurgerStack = (item) => {
    const newStack = [item, ...burgerStack]
    setBurgerStack(newStack)
  }

  const addToMenuItems = (item) => {
    const newItems = [...menuItems, item]
    setMenuItems(newItems)
  }

  return (
    <div className="container">
      <Menu menuItems={menuItems} addToBurgerStack={addToBurgerStack} addToMenuItems={addToMenuItems} />
      <StackingArea burgerStack={burgerStack} setBurgerStack={setBurgerStack} />
    </div>
  );
}

export default App;
