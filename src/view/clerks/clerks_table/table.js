import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DrawerAndAppBar from "../../../shared/drawer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { getAllCk, deleteClerk } from "../../../actions/admin";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
function createData(name, apps, id) {
  return { name, apps, id };
}

export default function ClerkTable() {
  const rows = [];

  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getAllCk());
  }, [dispatch]);

  const ck = useSelector((state) => state.clerk);

  if (ck.users !== undefined) {
    ck.users.forEach((user) => {


        rows.push(
          createData(
           user.name,
            user.staffNum,
  
            user.id
          )
        );

      console.log(rows);
    });
  }
  function deletHandler(id) {

    const _id ={"id":id}
    try{

      dispatch(deleteClerk(_id));
    }catch(err){
      
    }
    window.location.reload(false);
   
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      style={{backgroundColor:"#4558BE"}}

      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin System
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerAndAppBar />
      <Box
        component="main"
        xs={{ flexGrow: 1 }}
        sx={{ ml: 20, mt: 10, mb: 10 }}
      >
        <Toolbar />

        <TableContainer component={Paper}>
          <h2 style={{ textAlign: "center" }}>Clerks</h2>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Staff Number</TableCell>
                {/* <TableCell align="right">Date of issue</TableCell> */}
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.apps}</TableCell>
                  {/* <TableCell align="center">{row.date}</TableCell> */}
                  <TableCell align="right">
                    {" "}
                    <Stack spacing={2} direction="row" style={{justifyContent: "center"}}>
                      <Link to={`/update_clerk/${row.id}`}>
                      <Button variant="outlined">
                        <EditIcon />
                      </Button>
                      </Link>
                      <Button
                        type="submit"
                        variant="contained"
                        color="error"
                        onClick={()=>deletHandler(row.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box>
          <Link to="/add_clerk">
            <Button
              color="success"
              style={{ float: "right", marginTop: "10px" }}
              variant="contained"
            >
              Add
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
