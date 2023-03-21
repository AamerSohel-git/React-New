import React from 'react'

const OneComp = (props) => { // props.name method
  return (
    <div>OneComp
        <h5>One props: {props.text}</h5>
        <p style={{color:"orange"}}>{props.help1}</p>
    </div>
  )
}

export default OneComp;