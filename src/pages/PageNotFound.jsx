import React from 'react'
import {
    ThemeProvider,
    createTheme,
    Button,
    Box,
    Divider,
    ToggleButton,
    TextField,
    Typography,
    Drawer,
    Paper,
  } from "@mui/material";



const PageNotFound = () => {
  return (
    <Box sx={{
        // border:"1px solid red",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }}>

    <Typography variant="h2" color="warning">404</Typography>
    <Typography variant="h2" color="error">Page Not Found</Typography>


    </Box>
  )
}

export default PageNotFound