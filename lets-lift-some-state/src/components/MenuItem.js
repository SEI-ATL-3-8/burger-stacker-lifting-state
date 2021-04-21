const MenuItem = (props) => {
  return (
    <li style={{backgroundColor: props.item.color}}>
      {props.item.name}
      <button onClick={() => {
        props.addToBurgerStack(props.item)
      }}>
        Add
      </button>
    </li>
  )
}

export default MenuItem