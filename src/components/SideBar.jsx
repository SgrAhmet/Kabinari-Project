import React from 'react'
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme, Button, Box,List,ListItem,ListItemButton,ListItemText,ListItemIcon,Divider, ToggleButton, TextField,Typography,Drawer  } from "@mui/material";
import {
  Person,
  CalendarMonth,
  Assessment,
  People,
  Groups2,
  Cabin,
  AccessAlarm,
  SensorDoor,
  Task,
  CreateNewFolder,
  AutoAwesomeMotion
} from "@mui/icons-material";
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import logo from "../imgs/logo2.png"
import { Link } from "react-router-dom";
const SideBar = ({open,toggleDrawer}) => {


  const navigate = useNavigate();

  const handleNavigation = (index) => {
    const routes = ["/Yeni-Proje", "/", "/  "];
    navigate(routes[index]);
  };

    const DrawerList = (
        <Box sx={{ width: 250, }} role="presentation" onClick={toggleDrawer(false)}>
          <img style={{width:"80%",margin:"10px"}} src={logo} alt="Kabinari" srcset="" />
          <Divider
              sx={{ borderBottomWidth: 3, backgroundColor: "#DEDDDB" }}
            />
          <List>
            {['Yeni Proje', 'Tüm Projeler', 'Son Proje'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={()=>handleNavigation(index)}>
                  <ListItemIcon>
                    {index == 0 ? <CreateNewFolder /> : index == 1 ? <AutoAwesomeMotion />  : <AccessAlarm />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Alimünyum Kasa Projeleri', 'Kabin Projeleri'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <SensorDoor /> : <Cabin />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Link to="/firebase">Firebase</Link>
        </Box>
      );
  return (
    <>
    <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
    </Drawer>

    </>
  )
}

export default SideBar