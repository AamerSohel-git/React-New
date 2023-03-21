import React, { useState } from "react";
const imageOn = `https://www.freeiconspng.com/thumbs/bulb/clip-art-yellow-light-bulb-png-8.png`;
const imageOff = `https://cdn3.vectorstock.com/i/1000x1000/89/72/object-bulb-off-vector-1858972.jpg`;
export const Switch = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <img src={show ? imageOn : imageOff} height="300px" width="200px" />
      <br />
      <button
        style={show ? { backgroundColor: "green" } : { backgroundColor: "red" }}
        onClick={() => setShow(!show)}
      >
        {show ? "ON" : "OFF"}
      </button>
    </div>
  );
};
