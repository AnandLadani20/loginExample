import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import axios from "../services/axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const products = useSelector((state) => state.products.product);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);


  return (
    <Box>
      <Box>
        <Link to={'/categories'} >Categories</Link>
      </Box>
      <Box>
        {
          products?.products.map((p) => {
            return (
              <Card sx={{ maxWidth: 345 }} key={p.id}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={p.images[1]}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {p.title} $ {p.price} {p.rating}
                  </Typography>
                  <div
                    className="featured-stars"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={p.rating}
                    style={{ "--rating": `${p.rating}` }}
                  >
                    <span className="feature-tooltip">
                      {p.rating}
                    </span>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    {p.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })
          // products?.map((products))
        }
      </Box>
    </Box>
  );
};

export default Dashboard;
