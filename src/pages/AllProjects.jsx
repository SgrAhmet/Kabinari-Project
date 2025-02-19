import React, { useEffect, useState } from "react";
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
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import DynamicForm from "../components/DynamicForm";
import AllProjectsListItem from "../components/AllProjectsListItem";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const AllProjects = () => {
  //  SideBar===============================
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  //  SideBar===============================

  const [gelenVeriler, setGelenVeriler] = useState([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Veriler"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGelenVeriler(data);
      console.log(data);

      console.log(gelenVeriler);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ bgcolor: "#DEDDDB", height: "100vh" }}>
      <Navbar toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />

      <Box
        sx={{
          bgcolor: "#DEDDDB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            // border: "1px solid #FFFFFF",
            bgcolor: "#FFFFFF",
            borderRadius: "20px",
            margin: "20px",
            marginY: "50px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
            minHeight: "20vh",
            width: "70%",
            padding: "20px",
            paddingY:"50px",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent:"center"
          }}
        >
          {gelenVeriler.length > 0 ? (
            gelenVeriler.map((data) => (
                <AllProjectsListItem
                  key={data.id}
                  data={data}
                  fetchData={fetchData}
                />
            ))
          ) : (
            <Typography color="#1C3960">Yükleniyor...</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AllProjects;
