import React from 'react'
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
  Task
} from "@mui/icons-material";
import logo from "../imgs/logo2.png"

const SideBar = ({open,toggleDrawer}) => {

    const DrawerList = (
        <Box sx={{ width: 250, }} role="presentation" onClick={toggleDrawer(false)}>
          <img style={{width:"80%",margin:"10px"}} src={logo} alt="Kabinari" srcset="" />
          <Divider
              sx={{ borderBottomWidth: 3, backgroundColor: "#DEDDDB" }}
            />
          <List>
            {['Müşteriler', 'Tüm Projeler', 'Son Proje'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index == 0 ? <Groups2 /> : index == 1 ? <Task /> : <AccessAlarm />}
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