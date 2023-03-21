import React from 'react'

const TwoComp = ({pqr, help2}) => { // calling by props name
  return (
    <div>TwoComp
        <h5>Two Props: {pqr}</h5>
        <p style={{color:"orange"}}>{help2}......!</p>
    </div>
  )
}

export default TwoComp