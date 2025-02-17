import React, { useState, useEffect } from "react";
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
  SensorDoor,
} from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import StyleFormRow from "../components/StyleFormRow";
import DynamicForm from "../components/DynamicForm";
import srcBg from"../imgs/cool-background2.png"


const YeniProjePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selected, setSelected] = useState(false);

  const [müsteriIsmi, setmüsteriIsmi] = useState("");
  const [isNumarası, setIsNumarası] = useState("")
  const [olusturmaTarihi, setOlusturmaTarihi] = useState("")

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#BB86FC" : "#1976D2",
      },
      secondary: {
        main: "#0c9d0c",
      },
    },
  });

  //  SideBar===============================
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  //  SideBar===============================

  //! =================================================
  const handleRowChange = (id, updatedData) => {
    setFormDataList((prevList) => {
      const newList = [...prevList];
      newList[id] = updatedData; // İlgili ID'ye sahip satırın verisini güncelle.
      return newList;
    });
  };

  const [formDataList, setFormDataList] = useState([]);
  const [newRows, setNewRows] = useState([
    <StyleFormRow key={0} id={0} onChange={handleRowChange} />,
  ]);

  //! =================================================

  const denemeData = [
    {
      barel: "?2",
      boy: "200",
      cumba: "u",
      duvarKalinligi: "25",
      en: "120",
      hidrolik: true,
      itmelik: true,
      kanat: "ka",
      kasa: "sa",
      kat: "1",
      kilit: "ki",
      kol: "baston",
      lumboz: true,
      mahal: "1",
      mahalNo: "3",
      menfez: true,
      tekmelik: true,
      tip: "asd",
      yangınaD: true,
      yon: "sağ",
    },
    {
      barel: "?1",
      boy: "",
      cumba: "pvc",
      duvarKalinligi: "",
      en: "",
      hidrolik: false,
      itmelik: true,
      kanat: "",
      kasa: "",
      kat: "2",
      kilit: "",
      kol: "boru",
      lumboz: false,
      mahal: "2",
      mahalNo: "3",
      menfez: true,
      tekmelik: false,
      tip: "asd",
      yangınaD: false,
      yon: "sol",
    },   {
      barel: "?3",
      boy: "",
      cumba: "",
      duvarKalinligi: "",
      en: "",
      hidrolik: false,
      itmelik: true,
      kanat: "",
      kasa: "",
      kat: "3",
      kilit: "",
      kol: "",
      lumboz: false,
      mahal: "3",
      mahalNo: "3",
      menfez: true,
      tekmelik: false,
      tip: "asd",
      yangınaD: false,
      yon: "dışarı-sağ",
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          // border:"2px solid tomato",
          width: "100%",
          height: "100vh",
          // width:"100vw"
        }}
      >
        <Navbar toggleDrawer={toggleDrawer} />
        <SideBar open={open} toggleDrawer={toggleDrawer} />
        <Box
          sx={{
            backgroundColor: "#DEDDDB",
            // backgroundColor:"red",
            // backgroundImage: `url(${srcBg})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: "90vh",
          }}
        >
          <Box
            sx={{
              // border:"1px solid red",
              display: "flex",
              padding: "10px",
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
              marginX: "20px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
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
                <Person sx={{ fontSize: "36px", color: "#A19D95" }} />
                <Typography
                  color="#A19D95"
                  fontSize={24}
                  display={"flex"}
                  alignItems={"center"}
                  marginX={"10px"}
                >
                  Müşteri İsmi
                </Typography>
              </Box>

              <TextField
                sx={{ width: "60%" }}
                id="outlined-basic"
                variant="outlined"
                size="small"
                inputProps={{ autoComplete: "off" }}
                value={müsteriIsmi}
                onChange={(e) => {
                  setmüsteriIsmi(e.target.value);
                }}
              />
              <Box height={"50px"} width={"95px"}></Box>
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
                  alignItems: "center",
                }}
              >
                <Assessment sx={{ fontSize: "36px", color: "#A19D95" }} />
                <Typography
                  color="#A19D95"
                  fontSize={24}
                  display={"flex"}
                  alignItems={"center"}
                  marginX={"10px"}
                >
                  İş Numarası
                </Typography>
              </Box>

              <TextField
                sx={{ width: "60%" }}
                id="outlined-basic"
                variant="outlined"
                size="small"
                inputProps={{ autoComplete: "off" }}
                value={isNumarası}
                onChange={(e) => {
                  setIsNumarası(e.target.value);
                }}
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
                  alignItems: "center",
                }}
              >
                <CalendarMonth sx={{ fontSize: "36px", color: "#A19D95" }} />
                <Typography
                  color="#A19D95"
                  fontSize={24}
                  display={"flex"}
                  alignItems={"center"}
                  marginX={"10px"}
                  
                >
                  Oluşturma Tarihi
                </Typography>
              </Box>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  format="DD/MM/YYYY"
                  sx={{ width: "60%" }}
                  slotProps={{ textField: { size: "small" } }}
                  
                  // label="Oluşturma Tarihi"
                  // value={olusturmaTarihi}
                  onChange={(newValue) => setOlusturmaTarihi(newValue)
                  
                }
                />
              </LocalizationProvider>

              <Box height={"50px"} width={"140px"}></Box>
            </Box>

            <Divider
              sx={{ borderBottomWidth: 3, backgroundColor: "#DEDDDB" }}
            />

            <Box
              sx={{
                width: "100%",  
                // border:"3px solid black"
              }}
            >
              <DynamicForm müsteriIsmi={müsteriIsmi} olusturmaTarihi={olusturmaTarihi} isNumarası={isNumarası}/>
              {/* <DynamicForm müsteriIsmi={müsteriIsmi}  /> */}
            </Box>
            
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default YeniProjePage;
