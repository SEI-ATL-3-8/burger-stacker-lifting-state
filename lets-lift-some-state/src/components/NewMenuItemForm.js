import { useState } from 'react'

const NewMenuItemForm = (props) => {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  
  return (
    <form onSubmit={((e) => {
      e.preventDefault()
      props.addToMenuItems({ name, color })
    })}>
      Name
      <input value={name} onChange={(e) => { setName(e.target.value) }} />
      Color
      <input value={color} onChange={(e) => { setColor(e.target.value) }} />
      <input type="submit" value="Add!" />
    </form>
  )
}

export default NewMenuItemForm