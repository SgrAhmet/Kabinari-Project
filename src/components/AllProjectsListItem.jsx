import React from "react";
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
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { confirmAlert } from 'react-confirm-alert'; // Import
import {deleteDoc,doc} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
const AllProjectsListItem = ({ data,fetchData }) => {
  const sectionSx = {
    width: "25%",
  };
  const iconSx=
    { fontSize: 32,color:"#1C3960" ,":hover" : {
        color:"#E41C3C",
                }}
  const navigate = useNavigate();
  const options = {
    title: 'Dikkat',
    message: `İş Numarası ${data.isNumarası} olan projeyi veri tabanından silmek istediğinizden emin misiniz?`,
    buttons: [
      {
        label: 'Evet',
        onClick: () =>{ deleteDocument(data.id)
            fetchData()
        }
        
      },
      {
        label: 'Hayır',
        // onClick: () => alert('Click No')
      }
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
    keyCodeForClose: [8, 32],
    willUnmount: () => {},
    afterClose: () => {},
    onClickOutside: () => {},
    onKeypress: () => {},
    onKeypressEscape: () => {},
    overlayClassName: "overlay-custom-class-name"
  };
  
  const deleteDocument = async (docId) => {
    try {
    
      const orderDocRef = doc(db, "Veriler", docId);
      await deleteDoc(orderDocRef);
    
    } catch (error) {
      console.error("Error deleting order: ", error);
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "#DDDCDA",
        width: "80%",
        padding: "30px",
        borderRadius: "10px",
        borderLeft: "20px solid #1C3960",
        "&:hover": {
          borderLeft: "30px solid #1C3960",
          cursor: "pointer",
        },
        transition: "border-left 0.2s ease-in-out",
        display: "flex",
        gap: "10px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      onClick={()=>navigate(`/Proje/${data.id}`, { state: { data: data }}) }
      // navigate(`/Proje-${data.id}`, { state: { projectData: data } });
    >
      <Box sx={sectionSx}>
        <Typography>Müşteri İsmi</Typography>
        <Typography sx={{ overflowWrap: "break-word", maxWidth: "100%" }}>
          {data.musteriIsmi.trim() == "" ? "Project" : data.musteriIsmi}
        </Typography>
      </Box>
      <Box sx={sectionSx}>
        <Typography>İş Numarası</Typography>
        <Typography>
          {data.isNumarası.trim() == "" ? "00000" : data.isNumarası}
        </Typography>
      </Box>
      <Box sx={sectionSx}>
        <Typography>Oluşturma Tarihi</Typography>
        <Typography>{data.olusturmaTarihi}</Typography>
      </Box>
      <Box sx={{ ...sectionSx, display: "flex", justifyContent: "flex-end" }}>
        <HighlightOffIcon sx={iconSx} onClick={()=>confirmAlert(options)} />
      </Box>
    </Box>
  );
};

export default AllProjectsListItem;
