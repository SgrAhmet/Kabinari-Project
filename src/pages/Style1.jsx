import React, { useState } from "react";
import { ThemeProvider, createTheme, Button, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Home, Receipt, People, Report, Settings,Delete } from "@mui/icons-material";
const Style1 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#BB86FC" : "#1976D2",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex", // Flexbox kullanımı
          justifyContent: "center", // Yatayda ortala
          alignItems: "center", // Dikeyde ortala
          height: "100vh", // Tüm ekran yüksekliği
        //   border:"1px solid red" ,
          backgroundColor: isDarkMode ? "#333" : "#b9b9b9", // Arka plan rengi
        }}
      >
        <Button
          variant="contained"
          sx={{
            // backgroundColor:"red",
            fontFamily:"inherit",
            fontWeight:"500"
          }}
          size="large" 
          startIcon={<DeleteIcon />}
        //   spacing={2}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Tema Değiştir
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default Style1;
