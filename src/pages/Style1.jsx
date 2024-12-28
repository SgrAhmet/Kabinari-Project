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
import NameRow from "../components/NameRow";

const Style1 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selected, setSelected] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#BB86FC" : "#1976D2",
      },
      secondary:{
        main:"#0c9d0c",
        
      }
    },
  });

  //  SideBar===============================
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  //  SideBar===============================

  //! =================================================
  const [formDataList, setFormDataList] = useState([]);
  const [rows, setRows] = useState([0]);

  const handleExelBtn = () => {
    console.log("Form Verileri:", formDataList);
  };

  const handleNewRowBtn = () => {
    setRows((prev) => [...prev, prev.length]); // Yeni boş satır ekler
    setFormDataList((prev) => [...prev, {}]); // Yeni boş veri ekler
  };

  const handleSameRowBtn = () => {
    if (formDataList.length === 0) return;

    const lastRowData = formDataList[formDataList.length - 1]; // Son satırın verisi
    setRows((prev) => [...prev, prev.length]); // Yeni satır ekle
    setFormDataList((prev) => [...prev, { ...lastRowData }]); // Son satırın kopyasını ekle
  };

  const updateFormData = (id, data) => {
    setFormDataList((prev) => {
      const updatedData = [...prev];
      updatedData[id] = data; // Belirtilen `id`deki veriyi günceller
      return updatedData;
    });
  };

  const deleteFormRow = (rowId) => {
    setRows((prevRows) => prevRows.filter((row) => row !== rowId)); // Seçilen satırı sil
    setFormDataList((prevData) =>
      prevData.filter((_, index) => index !== rowId)
    ); // Aynı index'teki veriyi sil
  };

  useEffect(() => {
    console.log("Rows:", rows);
    console.log("Form Data List:", formDataList);
  }, [rows, formDataList]);
  //! =================================================

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
            width: "100%",
            minHeight: "90vh",
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
              // height: "80vh",
              // margin: "10px",
              marginX: "20px",
              // boxShadow: 1,
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
                size="small"
              />
              <Button
                sx={{ backgroundColor: "#665B59", height: "80%" }}
                variant="contained"
                onClick={handleExelBtn}
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
                  alignItems: "center",
                }}
              >
                <Assessment sx={{ fontSize: "36px", color: "#A19D95" }} />
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
                size="small"
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
                  // value={value}
                  // onChange={(newValue) => setValue(newValue)}
                />
              </LocalizationProvider>

              <Box height={"50px"} width={"140px"}></Box>
            </Box>

            <Divider
              sx={{ borderBottomWidth: 3, backgroundColor: "#DEDDDB" }}
            />


              {/* <NameRow/> */}
            <Box
              sx={{
                width: "100%",
                // border:"3px solid black"
              }}
            >
              {/* <StyleFormRow id={1} /> */}
              {rows.map((id) => (
                <StyleFormRow
                  key={id}
                  id={id}
                  data={formDataList[id] || {}}
                  updateFormData={updateFormData}
                  deleteFormRow={deleteFormRow}
                />
              ))}
            </Box>

            <Box sx={{ padding:"20px",display:"flex",gap:"10px"}}>
            <Button onClick={handleNewRowBtn} variant="contained">
              Yeni Satır
            </Button>
            <Button onClick={handleSameRowBtn} variant="contained">
              Aynı Satır
            </Button>
            </Box>
         
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Style1;