import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  ThemeProvider,
  createTheme,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  ToggleButton,
  TextField,
  Typography,
  Drawer,
} from "@mui/material";

const FirebaseDeneme = () => {
  const [veri1, setVeri1] = useState();
  

  // const [veri1Input, setVeri1Input] = useState()


  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Deneme"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //   setOrders(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  
  const addNewOrder = () => {
    // try {
    //   const ordersCollectionRef = collection(db, "Deneme");

    //   await addDoc(ordersCollectionRef, data)
    //   console.log("gfgdf")

    //   fetchData();

      
    // } catch (error) {
    //   console.error("Error adding new order: ", error);
     

    // }


    console.log("denemeeee")



  };


  const denemeFunc=()=>{
    console.log("ahmet")
  }

  
  const handleInputChange =(e)=>{
    // console.log(e.target.value)
    setVeri1(e.target.value)
  }
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap:"20px"
      }}
    >
      <TextField
        sx={{ width: "20%" }}
        id="outlined-basic"
        variant="outlined"
        size="small"
        value={veri1}
        onChange={handleInputChange}
      />

<Button
  sx={{ backgroundColor: "#665B59", width: "10%" }}
  variant="contained"
  onClick={() => {
    console.log("Button clicked!");
    denemeFunc();
  }}
>
  Veri Göndersss
</Button>

    </Box>
  );
};

export default FirebaseDeneme;
