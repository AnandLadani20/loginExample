import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

const Dashboard = () => {
  return (
    <Box sx={{position:"relative"}}>
      <Header />
      <Box sx={{position:"relative"}}>
        <Grid container sx={{position:"relative"}}>
          <Grid item xs={12} md={2.5} sx={{position:"relative"}}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9.5}>
             <Box sx={{padding:"20px", height:"200vh"}}>
             </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
