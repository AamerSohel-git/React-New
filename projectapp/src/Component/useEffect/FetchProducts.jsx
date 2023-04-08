import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const getproducts = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((resp) => setProducts(resp.data));
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div>
      <Typography variant="h3">FetchProducts</Typography>
      <Grid container spacing={3}>
        {products.length > 0 &&
          products.map((ele, ind) => {
            return (
              <Grid item xs={3} mt={16}>
                <Card style={{backgroundColor:"lightpink", height:480 }}>
                  <CardMedia
                    sx={{ height: 200}}
                    image={ele.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>Title:</strong> {ele.title.substr(0,16)}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>Description:</strong> {ele.description.substr(0,16)}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>Category:</strong> {ele.category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>Price:</strong> {ele.price} $
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default FetchProducts;
