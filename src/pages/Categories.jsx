import { Box, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaginationProduct } from "../redux/productSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


const Categories = () => {
  const [productLimit, setProductLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.products.categProduct);
  // const totalProducts = useSelector((state) => state.products.total);
  console.log(products);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPaginationProduct({limit: productLimit,skip: (currentPage - 1) * productLimit}));
  }, [dispatch, productLimit, currentPage]);

  const handlePagination = (page) => {
    setCurrentPage(page);
  };
  let pages = [];
  for(let i = 1; i <= Math.ceil(products?.total / productLimit); i++ ){
    pages.push(i);
  }
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'flexStart',gap:'10px',flexWrap:'wrap'}}>
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
        <Box>
        {
          pages.map((page,index)=>{
            return (
              <Button key={index} onClick={() => handlePagination(page + 1)}>  
            {page}
          </Button>
            )
          })
        }
      </Box>
    </>
  )
}

export default Categories