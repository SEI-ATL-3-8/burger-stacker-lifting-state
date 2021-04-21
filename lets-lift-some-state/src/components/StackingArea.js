const StackingArea = (props) => {
  return (
    <div className="stacking-area">
      {props.burgerStack.map((layer, i) => {
        return <div
          key={i}
          className="layer" 
          style={{backgroundColor: layer.color}}
        >
          {layer.name}
        </div>
      })}
      <button
        onClick={() => { props.setBurgerStack([]) }}
      >CLEAR</button>
    </div>
  )
}

export default StackingArea
