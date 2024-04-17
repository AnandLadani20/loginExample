import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Avatar,
  Typography,
  ListItemText,
  ListItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Link, NavLink } from "react-router-dom";
import "../sidebar.scss";

const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#c1edff",
        height: "calc(100vh - 70px)",
        width: "300px",
        position: "fixed",
        top: "70px",
        left: "0",
      }}
    >
      <Box sx={{ display: "flex", gap: "10px", padding: "20px 20px" }}>
        <Avatar>H</Avatar>
        <Typography>John Doe</Typography>
      </Box>
      <List sx={{ border: "1px solid red" }}>
        <ListItem className="sidebar_list_item">
          <NavLink className="sidebar_list_item_link" to="/">
            <Avatar>H</Avatar>
            <Typography>Dashboard</Typography>
          </NavLink>
        </ListItem>
        <ListItem className="sidebar_list_item">
          <NavLink className="sidebar_list_item_link" to="/qw">
            <Avatar>H</Avatar>
            <Typography>Dashboard</Typography>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
