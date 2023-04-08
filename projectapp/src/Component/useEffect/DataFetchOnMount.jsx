import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios"

export const DataFetchOnMount = () => {
  const [posts, setPost] = useState([]);
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>setPost(res.data))
  };
  
  useEffect(()=>{
    getData();
  }, [])

  return (
    <div>
      <Typography variant="h3">Data Fetch on ComponentDidMount()</Typography>
      {posts.length>0 && posts.map((ele, index) => {
        return (
          <div style={{ padding: "12px" }} key={index}>
            <Card
              sx={{ minWidth: 275 }}
              style={{ backgroundColor: "lightgray" }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <strong> User ID:</strong> {ele.id}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <strong> Title:</strong> {ele.title}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <strong> Body:</strong> {ele.body}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
