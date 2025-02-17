import React from 'react'
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import {
  ThemeProvider,
  createTheme,
  Button,
  Box,
  Link,
  Divider,
  ToggleButton,
  TextField,
  Typography,
  Drawer,
  Paper,
} from "@mui/material";
import DynamicForm from '../components/DynamicForm';
import { useLocation } from "react-router-dom";

const ExistentProject = () => {

  const location = useLocation();
  const { data } = location.state || {}; // gönderilen veriyi al

  console.log(data)

  const { id } = useParams()
    //  SideBar===============================
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    //  SideBar===============================
  return (
    <Box sx={{ bgcolor: "#DEDDDB", height:"100vh",
  }}>
     <Navbar toggleDrawer={toggleDrawer} />
     <SideBar open={open} toggleDrawer={toggleDrawer} />
   
     <Box
       sx={{
         // border: "1px solid #FFFFFF",
         bgcolor: "#FFFFFF",
         borderRadius: "20px",
         margin: "20px",
         marginY:"30px",
         boxShadow:
           "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
         minHeight: "80vh",
         padding: "20px",
         display:"flex",
         gap:"10px",
         flexDirection:"column",
         alignItems:"center",
         // justifyContent:"center"
       }}
     >
   
       <DynamicForm/>
     </Box>
   </Box>
  )
}

export default ExistentProject