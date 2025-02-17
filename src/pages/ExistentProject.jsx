import React from "react";
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
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Person, CalendarMonth, Assessment } from "@mui/icons-material";
import DynamicForm from "../components/DynamicForm";
import { useLocation } from "react-router-dom";

const ExistentProject = () => {
  const location = useLocation();
  const { data } = location.state || {}; // gönderilen veriyi al

  console.log(data);

  const { id } = useParams();
  //  SideBar===============================
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  //  SideBar===============================
  return (
    <Box sx={{ bgcolor: "#DEDDDB", height: "100vh" }}>
      <Navbar toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />

      <Box
        sx={{
          //  border: "1px solid red",
          bgcolor: "#FFFFFF",
          borderRadius: "20px",
          margin: "20px",
          marginY: "30px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
          minHeight: "60vh",
          padding: "20px",
          display: "flex",
          // gap: "1px",
          flexDirection: "column",
          //  alignItems:"center",
          //  justifyContent:"center"
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
            disabled={true}
            value={data.musteriIsmi}
          />
          <Box height={"50px"} width={"95px"}></Box>
        </Box>


        <Divider sx={{ borderBottomWidth: 3, backgroundColor: "#DEDDDB" }} />

        <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginX: "30px",
                marginTop:"20px",
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
                disabled={true}
                value={data.isNumarası}
              />

              <Box height={"50px"} width={"95px"}></Box>
         </Box>


         <Box
              sx={{
                // bgcolor:"red",
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

              <TextField
                sx={{ width: "60%" }}
                id="outlined-basic"
                variant="outlined"
                size="small"
                inputProps={{ autoComplete: "off" }}
                disabled={true}
                value={data.olusturmaTarihi}
              />

              <Box height={"50px"} width={"140px"}></Box>
            </Box>

        <Divider sx={{ borderBottomWidth: 3, backgroundColor: "#DEDDDB" }} />

        {/* <DynamicForm data={data.data}/> */}
        <DynamicForm
          müsteriIsmi={data.musteriIsmi}
          data={data.data}
          olusturmaTarihi={data.olusturmaTarihi}
          isNumarası={data.isNumarası}
          databaseId={data.id}
        />
      </Box>
    </Box>
  );
};

export default ExistentProject;
