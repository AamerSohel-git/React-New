import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const TextFields = () => {
  const [details, setDetails] = useState({});
  const config = [
    {
      labelName: "First Name",
      fieldName: "firstName",
      type: "text",
    },
    { labelName: "Last Name", fieldName: "lastName", type: "text", value: " " },
    {
      labelName: "Middle Name",
      fieldName: "middleName",
      type: "text",
    },
    {
      labelName: "Mobile Number",
      fieldName: "Mobile_Number",
      type: "Number",
    },
  ];

  const handleChange = (e, i) => {
    console.log(e.target.name)
    console.log(e.target.value)
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container spacing={2} ml={2}>
        {config.map((item, index) => {
          return (
            <>
              <Grid item sx={4}>
                <TextField
                  required
                  id="outlined-required"
                  label={item.labelName}
                  type={item.type}
                  name={item.fieldName}
                  value={details.value}
                  onChange={(e) => handleChange(e, index)}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default TextFields;
