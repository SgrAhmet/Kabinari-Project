import React, { useState } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import {
  Person,
  CalendarMonth,
  Assessment,
  People,
  Report,
  Settings,
  Delete,
} from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const Style1 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selected, setSelected] = useState(false);

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
      <Box
        sx={{
          // border:"2px solid tomato",
          height: "100vh",
          // width:"100vw"
        }}
      >
        <Navbar toggleDrawer={toggleDrawer} />
        <SideBar open={open} toggleDrawer={toggleDrawer} />
        <Box
          sx={{
            backgroundColor: "#DEDDDB",
            // height: "90%",
          }}
        >
          <Box
            sx={{
              // border:"1px solid red",
              display: "flex",
              padding: "10px",
              // justifyContent:"space-around"
            }}
          >
            <Typography
              color="#A19D95"
              fontSize={32}
              fontFamily={"unset"}
              marginLeft={"30px"}
              marginY={"10px"}
            >
              Yeni Proje
            </Typography>
          </Box>

          <Box
            sx={{
              border: "1px solid #FFFFFF",
              bgcolor: "#FFFFFF",
              borderRadius: "20px",
              height: "80vh",
              margin: "10px",
              marginX: "30px",
              boxShadow: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                margin: "30px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Person sx={{ fontSize: "48px", color: "#A19D95" }} />
                <Typography
                  color="#A19D95"
                  fontSize={24}
                  // sx={{justifyContent:"center"}}
                  display={"flex"}
                  alignItems={"center"}
                  // fontFamily={"unset"}
                  // marginLeft={"30px"}
                  marginX={"10px"}
                >
                  Müşteri İsmi
                </Typography>
              </Box>

              <TextField
                sx={{ width: "60%" }}
                id="outlined-basic"
                variant="outlined"
              />
              <Button
                sx={{ backgroundColor: "#665B59", height: "80%" }}
                variant="contained"
              >
                Kaydet
              </Button>
            </Box>

            <Divider
              sx={{ borderBottomWidth: 3, backgroundColor: "#DEDDDB" }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                margin: "30px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Assessment sx={{ fontSize: "48px", color: "#A19D95" }} />
                <Typography
                  color="#A19D95"
                  fontSize={24}
                  // sx={{justifyContent:"center"}}
                  display={"flex"}
                  alignItems={"center"}
                  // fontFamily={"unset"}
                  // marginLeft={"30px"}
                  marginX={"10px"}
                >
                  İş Numarası
                </Typography>
              </Box>

              <TextField
                sx={{ width: "60%" }}
                id="outlined-basic"
                variant="outlined"
              />

              <Box height={"50px"} width={"95px"}></Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                margin: "30px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CalendarMonth sx={{ fontSize: "48px", color: "#A19D95" }} />
                <Typography
                  color="#A19D95"
                  fontSize={24}
                  // sx={{justifyContent:"center"}}
                  display={"flex"}
                  alignItems={"center"}
                  // fontFamily={"unset"}
                  // marginLeft={"30px"}
                  marginX={"10px"}
                >
                  Oluşturma Tarihi
                </Typography>
              </Box>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: "60%" }}
                  label="Oluşturma Tarihi"
                  // value={value}
                  // onChange={(newValue) => setValue(newValue)}
                />
              </LocalizationProvider>

              <Box height={"50px"} width={"140px"}></Box>
            </Box>

            <Divider
              sx={{ borderBottomWidth: 3, backgroundColor: "#DEDDDB" }}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Style1;
