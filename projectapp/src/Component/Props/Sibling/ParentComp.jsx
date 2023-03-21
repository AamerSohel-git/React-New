import React, { useState } from "react";
import OneComp from "./OneComp";
import ThreeComp from "./ThreeComp";
import TwoComp from "./TwoComp";

const ParentComp = () => {
    const [text, setText] = useState("");
    const helperText = "Only string values are excepted"
  return (
    <div>
      <h1>ParentComp</h1>
      <input type="text" onChange={(e)=>setText(e.target.value)} />
      <h5>Parent data: {text}</h5>
      <p style={{color:"orange"}}>{helperText}......!</p>
      <OneComp text={text} help1={helperText}/>
      <TwoComp pqr={text} help2={helperText}/>
      <ThreeComp text={text} helperText={helperText}/>
    </div>
  );
};

export default ParentComp;
