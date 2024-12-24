import React from "react";
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
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  Person,
  CalendarMonth,
  Assessment,
  People,
  Report,
  Settings,
  Delete,
} from "@mui/icons-material";
const StyleFormRow = () => {
  let items = [];
  const textFieldLabelNames = [
    "Kat",
    "Tip",
    "Mahal-No",
    "Mahal",
    "En",
    "Boy",
    "Duvar Kalınlığı",
    "Kanat",
    "Kasa",
    "Kilit",
  ];
  const selectLabelNames = ["Yön", "Barel", "Cumba", "Kol"];
  const selectLabelOptions = [
    <>
      
      <MenuItem value={10}>Sağ</MenuItem>
      <MenuItem value={20}>Sol</MenuItem>
      <MenuItem value={30}>Dışarı Sağ</MenuItem>
      <MenuItem value={30}>Dışarı Sol</MenuItem>
    </>,
      <>
   
      <MenuItem value={10}>?1</MenuItem>
      <MenuItem value={20}>?2</MenuItem>
      <MenuItem value={30}>?3</MenuItem>
    </>,
      <>
   
      <MenuItem value={10}>PVC</MenuItem>
      <MenuItem value={20}>U</MenuItem>

    </>,
      <>
    
      <MenuItem value={10}>Baston</MenuItem>
      <MenuItem value={20}>Boru</MenuItem>
    </>,
  ];

  for (let i = 0; i < 9; i++) {
    items.push(
      <TextField
        sx={{ width: "8%" }}
        // InputProps={{ sx: { borderRadius: 0 } }}
        size="small"
        id="outlined-basic"
        variant="outlined"
        label={textFieldLabelNames[i]}
        InputLabelProps={{
          sx: {
            fontSize: "12px",
            // textAlign:"center"
          },
        }}
      />
    );
  }

  for (let i = 0; i < 4; i++) {
    items.push(
      <FormControl
        size="small"
        sx={{
          width: "8%",
        }}
      >
        <InputLabel id={selectLabelNames[i]}>{selectLabelNames[i]}</InputLabel>
        <Select
          labelId={selectLabelNames[i]}
          id={selectLabelNames[i]}
          // value={age}
          label={selectLabelNames[i]}
          size="small"
          // onChange={handleChange}
        >
          {selectLabelOptions[i]}
        </Select>
      </FormControl>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: "tomato",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "10px",
      }}
    >
      {items}


    </Box>
  );
};

export default StyleFormRow;
