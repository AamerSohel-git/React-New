import React, { useEffect, useState } from "react";
import axios from "axios";

const ComponentDidUpdate = () => {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  // componentDidMount();
  useEffect(() => {
    setCount(count + 1);
  }, []);

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>console.log(res.data))
  };
  // componentDidUpdate()
  // 1: Unconditionally
//   useEffect(() => {
//     setCount(count + 1);
//   });
  // 2: Conditionally
  useEffect(() => {
    setCount(count + 1);
    getData();
  }, [clicked]);

  // componentWillUnmount()
//   useEffect(() => {
//    const counter = setTimeout(()=>{
//     setCount(count+1)
//    }, 1000)
//    return ()=> clearTimeout(counter)
//   }, [clicked]);

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <button
        style={
          clicked ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
        onClick={() => setClicked(!clicked)}
      >
        Click to update
      </button>
    </div>
  );
};

export default ComponentDidUpdate;
