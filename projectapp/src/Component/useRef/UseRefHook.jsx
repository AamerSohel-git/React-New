import React, { useState, useRef , useEffect} from 'react'

const UseRefHook = () => {
    const [input1, setInput1] = useState("")
    const inputE2 = useRef("First")
    //componentDidMount(); /// mounting phase
    useEffect(()=>{
        console.log("Render")
        inputE2.current.focus();
    }, [])
  return (
    <div>
        <h1>UseRefHook</h1>
        <input type="text" placeholder="First Name"  onChange={(e)=>setInput1(e.target.value)}/>{" "}
        <input type="text" placeholder="Last Name" />{" "}
        <input type="text" placeholder="Surname" ref={inputE2}/>
    </div>
  )
}

export default UseRefHook