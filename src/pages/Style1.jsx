import React, { useState } from "react";
import { ThemeProvider, createTheme, Button, Box,List,ListItem,ListItemButton,ListItemText,ListItemIcon,Divider, ToggleButton, TextField,Typography,Drawer  } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { Home, Receipt, People, Report, Settings,Delete } from "@mui/icons-material";
import SideBar from "../components/SideBar";


const Style1 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selected, setSelected] = useState(false)

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#BB86FC" : "#1976D2",
      },
    },
  });




//  SideBar===============================
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
//  SideBar===============================

  return (
    <ThemeProvider theme={theme}>

      <Box sx={{
        border:"5px solid tomato",
        height:"100vh"
      }}>

      <Button onClick={toggleDrawer(true)}><Settings /></Button>
      <SideBar open={open} toggleDrawer={toggleDrawer}/>
      </Box>
    </ThemeProvider>
  );
};

export default Style1;
