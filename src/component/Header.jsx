import { Box, IconButton, Avatar, Typography } from "@mui/material";
import "../header.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <Box
      height={70}
      gap={1.5}
      px={3}
    //   boxShadow={3}
      bgcolor="#c1edff"
      display="grid"
      alignItems="center"
      gridTemplateColumns="45px 1fr repeat(1,auto)"
      sx={{position:"fixed",width:"100%"}}
    >
      <Box>
        <IconButton>Logo</IconButton>
      </Box>
      <Box></Box>
      <Box sx={{ display:"flex"}}>
        <Box>
            <Search/>
        </Box>
        <Box>
            <Typography>Message <KeyboardArrowDownIcon /></Typography>
        </Box>
        <Box>
          <Avatar>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Avatar>
          <Typography>
            Notification <KeyboardArrowDownIcon />
          </Typography>
        </Box>
        <Box>
          <Avatar>H</Avatar>
          <Typography>John Doe</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
