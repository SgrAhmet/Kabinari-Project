import React from 'react'
import { ThemeProvider, createTheme, Button, Box,List,ListItem,ListItemButton,ListItemText,ListItemIcon,Divider, ToggleButton, TextField,Typography,Drawer  } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
const SideBar = ({open,toggleDrawer}) => {

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <DeleteIcon /> : <CheckIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <DeleteIcon /> : <CheckIcon />}
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