import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const ComplexCount = () => {
  const [count, setCount] = useState(0);
  
  const handlAdjust = (value) => {
    setCount(count+value)
  }
  return (
    <div>
      <Typography variant="h3">Counter: {count}</Typography>
      <Button variant="contained" color="success" onClick={()=>handlAdjust(+1)}>
        Increament
      </Button>{" "}
      &nbsp;
      <Button variant="contained" color="error" onClick={()=>handlAdjust(-1)} disabled={count==0}>
        Decreament
      </Button>
    </div>
  );
};

export default ComplexCount;
