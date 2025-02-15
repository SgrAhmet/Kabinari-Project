import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
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
import logo from "../imgs/logo2.png";
import src from "../imgs/undraw_data-trends_kv5v.svg"
import srcBg from"../imgs/cool-background2.png"
const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordField, setPasswordField] = useState("");

  const handleLogin = () => {
    // Giriş işlemi başarılı olduğunda
    login(passwordField);
    navigate("/Yeni-Proje"); // veya başka bir sayfaya yönlendirme
  };

  const handleChange = (e) => {
    setPasswordField(e);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        justifyContent: "center",
        flexDirection: "row",
        // background: "#1C3960"
        // background: "rgb(255,255,255)",
        // background: "linear-gradient(90deg, rgba(255,255,255,1) 1%, rgba(28,57,96,1) 60%)",

        backgroundImage: `url(${srcBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

      }}
    >

{/* <img src={src} alt="asd" /> */}
      <Box
        sx={{
          // backgroundColor: "#ff#ffffffef",
          backgroundColor:"#ffffff",
          width: "70%",
          height: "80%",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: "10px",
          padding: "10px",
          borderRadius:"20px"

        }}
      >
        <Box
          sx={{
            // backgroundColor: "red",
            width: "50%",
            height: "100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            gap:"20px",
            
          }}
        >


          <a href="http://www.kabinari.com/" target="_blank">
            <img style={{width:"200px" }} src={logo} alt="Kabinari" srcset="" />
          </a>

          {/* <Typography variant="h5">
            Password
          </Typography> */}

          <TextField
            size="small"
            value={passwordField}
            onChange={(e) => handleChange(e.target.value)}
            inputProps={{ autoComplete: "off" }}
            label="Password"
            type="password"
          />
          <Button onClick={handleLogin} variant="contained" >
            Login
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: "#5555e5",
            backgroundColor: "#5555e57d",
            // backgroundColor: "#20b2cf",
            width: "50%",
            height: "100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            borderRadius:"25px"
          }}
        >

          <img src={src} alt="asd" />



        </Box>
      </Box>
    </Box>
  );
};

export default Login;
