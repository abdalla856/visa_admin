import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DrawerAndAppBar from "../../shared/drawer";
import Graphs from "./components/graphs";
import { useDispatch } from "react-redux";
import { getAllStudent, getAllCk, getAllApps } from "../../actions/admin";
const Dashboard = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllStudent());
    dispatch(getAllCk());
    dispatch(getAllApps());
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ backgroundColor: "#4558BE" }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin System
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerAndAppBar />
      <Box component="main" xs={{ flexGrow: 1 }}>
        <Toolbar />
        <Graphs />
      </Box>
    </Box>
  );
};

export default Dashboard;
