import React, { useReducer } from "react";
import { Button, Typography } from "@mui/material";
// initial value //
const initial = { firstCount: 0, secondCount: 100 };

// Reducer function //
const ComplexCount = (state, action) => {
  switch (action.type) {
    case "plus1":
      return { ...state, firstCount: state.firstCount + action.payload };
    case "minus1":
      return { ...state, firstCount: state.firstCount - action.payload };
    case "reset1":
      return { ...state, firstCount: initial.firstCount };
    case "plus2":
      return { ...state, secondCount: state.secondCount + action.payload };
    case "minus2":
      return { ...state, secondCount: state.secondCount - action.payload };
    case "reset2":
      return { ...state, secondCount: initial.secondCount };
  }
};
const UseReducerComp = () => {
  const [countVal, dispatch] = useReducer(ComplexCount, initial);

  return (
    <div>
      <Typography variant="h3">
        Complex State Managment (useReducer() Hook)
      </Typography>
      <div style={{ marginTop: 40 }}>
        <Typography variant="h4">
          First Initial: {initial.firstCount}
        </Typography>
        <Typography variant="h4">
          First Count display: {countVal.firstCount}
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch({ type: "plus1", payload: 1 })}
        >
          (+) First
        </Button>{" "}
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch({ type: "minus1", payload: 1 })}
        >
          (-) First
        </Button>{" "}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch({ type: "reset1" })}
        >
          Reset First
        </Button>
      </div>
      <div style={{ marginTop: 80 }}>
        <Typography variant="h4">
          Sencond Initial: {initial.secondCount}
        </Typography>
        <Typography variant="h4">
          Second Count display: {countVal.secondCount}
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch({ type: "plus2", payload: 10 })}
        >
          (+) Second
        </Button>{" "}
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch({ type: "minus2", payload: 10 })}
        >
          (-) Second
        </Button>{" "}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch({ type: "reset2" })}
        >
          Reset Second
        </Button>
      </div>
    </div>
  );
};

export default UseReducerComp;
