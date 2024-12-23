import React from "react";
import {
  Button,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import {
  Menu,
  Home,
  Receipt,
  People,
  Report,
  Settings,
  Delete,
} from "@mui/icons-material";

import logo from "../imgs/logo2.png"

const Navbar = ({toggleDrawer}) => {

    // console.log(toggleDrawer)
    // toggleDrawer()
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        //   width: "100%",
          height:"10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        //   border: "1px solid orange",
        //   margin: "5px",
        }}
      >
        <AppBar
          position="static"
          sx={{
            // width: "80%",
            bgcolor:"#FFFFFF",
            padding:"10px"
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 ,color:" rgb(28, 57, 96)"}}
              onClick={toggleDrawer(true)}
            >
              <Menu sx={{fontSize:"32px"}}/>
            </IconButton>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Kabinari
            </Typography> */}
            <Box sx={{
                // border:"1px solid black",
                width:"15%",
                height:"70%",
                margin:"5px"
            }}>
            <img style={{height:"100%",width:"100%"}} src={logo} alt="Kabinari" srcset="" />

            </Box>

            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
