import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewIcon from '@mui/icons-material/GridView';
import ApprovalIcon from '@mui/icons-material/Approval';
import { useContext } from "react";
import { authCotext } from "../shared/context/auth-context";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from "react-router";

const drawerWidth = 240;


const DrawerAndAppBar = () => {
  const history = useNavigate()
  const auth = useContext(authCotext);
  const logout =()=>{
    auth.logout();
    history('/' ,{replace :true})
  }
  
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List sx={{mt:5}}>

            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <ListItem key={"Dashboard"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <GridViewIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} style={{color:"black"}} />
              </ListItemButton>
            </ListItem>
              </Link>

            <Link to="/students" style={{ textDecoration: 'none' }}>
            <ListItem key={"Students"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary={"Students"} style={{color:"black"}} />
              </ListItemButton>
            </ListItem>
              </Link>

            <Link to="/clerks" style={{ textDecoration: 'none' }}>
            <ListItem key={"Clerks"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary={"Clerks"} style={{color:"black"}} />
              </ListItemButton>
            </ListItem>
              </Link>

            <Link to="/apps" style={{ textDecoration: 'none' }}>
            <ListItem key={"Applications"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <ApprovalIcon />
                </ListItemIcon>
                <ListItemText primary={"Applications"} style={{color:"black"}} />
              </ListItemButton>
            </ListItem>
              </Link>

            {/* <Link to="/apps" style={{ textDecoration: 'none' }}> */}
            <ListItem key={"Logout"} disablePadding>
              <ListItemButton onClick={logout}>
                <ListItemIcon>
                 <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} style={{color:"black"}} />
              </ListItemButton>
            </ListItem>
              {/* </Link> */}
    
        </List>

      </Box>
      
    </Drawer>
  );
};

export default DrawerAndAppBar;
