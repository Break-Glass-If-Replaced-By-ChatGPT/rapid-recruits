// Import required libraries and components
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";

// Define the list of settings for the user menu
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// Define the main Nav component
export const BasicNav = () => {
  // Use the useState hook to manage the state of the user menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Define a function to open the user menu
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Define a function to close the user menu
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Define styles for the navigation bar components
  const toolbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#1E90FF",
  };

  const logoWrapperStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
  };

  const logoImgStyle = {
    width: "50px",
    height: "50px",
  };

  // Render the navigation bar
  return (
    <AppBar position="static">
      <Toolbar style={toolbarStyle}>
        <Link to="/" style={logoWrapperStyle}>
          <img
            src="RapidRecruitsLogoWhite.png"
            alt="Rapid Recruits Logo: Bring Your Dream, Build Your Future"
            style={{
              display: { xs: "none", md: "flex" },
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          />

          <Typography variant="h6" sx={{ ml: 1 }}>
            Rapid Recruits
          </Typography>
        </Link>
        <IconButton onClick={handleOpenMenu}>
          <Avatar alt="User avatar" src="/static/images/avatar/2.jpg" />
        </IconButton>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseMenu}>
              <Typography>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

// Export the Nav component
export default BasicNav;
