import React from 'react'

const ThreeComp = (props) => {
    const {text, helperText} = props; // destructuring of the props
  return (
    <div>ThreeComp
        <h5>Three props: {text}</h5>
        <p style={{color:"orange"}}>{helperText}......!</p>
    </div>
  )
}

export default ThreeComp