import React, { useState } from "react";
import { ThemeProvider, createTheme, Button, Box, ToggleButton, TextField,Typography  } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { Home, Receipt, People, Report, Settings,Delete } from "@mui/icons-material";
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

  let deneme =[]

  for (let i = 0; i < 5; i++) {
    deneme.push(<TextField id="outlined-basic" label="Mahal-No" variant="outlined"
    sx={{
      width:"150px"
    }}
    />)
    
  }

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
            fontWeight:"500",
            // transform: "rotate(270deg)",
            
          }}
          size="large" 
          startIcon={<DeleteIcon />}
        //   spacing={2}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Tema Değiştir
        </Button>

          <Typography variant="h4" color={isDarkMode ? "#b9b9b9" : "#333"}> deneme </Typography>
        <ToggleButton
        color="primary"
      value="check"
      selected={selected}
      onChange={() => setSelected((prevSelected) => !prevSelected)}
    >
      <CheckIcon />
    </ToggleButton>

    {/* <TextField id="outlined-basic" label="Mahal-No" variant="outlined" /> */}
    {deneme}
      </Box>
    </ThemeProvider>
  );
};

export default Style1;
