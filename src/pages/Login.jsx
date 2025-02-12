import React, { useContext,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
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

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordField, setPasswordField] = useState("")

  const handleLogin = () => {
    // Giriş işlemi başarılı olduğunda
    login(passwordField);
    navigate('/Yeni-Proje'); // veya başka bir sayfaya yönlendirme
  };

  const handleChange =(e)=>{
    setPasswordField(e)
  }

  return (
    <Box sx={{height:"100vh",backgroundColor:"white",display:"flex",alignItems:"center",gap:"20px",justifyContent:"center",flexDirection:"column"}}>
      <h1>Login Page</h1>
      <TextField
          size="small"
          value={passwordField}
          onChange={(e) => handleChange(e.target.value)}
          inputProps={{ autoComplete: "off" }}
        />
      <Button onClick={handleLogin} variant="contained">Login</Button>
    </Box>
  );
};

export default Login;