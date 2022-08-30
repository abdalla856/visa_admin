import * as React from "react";
import Box from "@mui/material/Box";
import DrawerAndAppBar from "../../../shared/drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FormLabel, TextField, Button } from "@mui/material";
import {createClerk} from '../../../actions/admin'
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


import "./add_new.css";
const AddClerk = () => {
  const history = useNavigate()

  const dispatch = useDispatch()
  const [allValues, setAllValues] = React.useState({
  name : "", staffNum:""
  });

  const handleChange = (event) => {
    console.log(event.target.value);

      setAllValues({ ...allValues, [event.target.name]: event.target.value });

   

  };

  const sumbitHandler = (e) => {
    e.preventDefault();

// alert(allValues.staffNum)
console.log(JSON.stringify(allValues))
try{
  dispatch(createClerk(allValues)).then(
    )
    
  }catch(err){
    alert(err.response)
  }
  history('/dashboard',{ replace: true })
  };

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
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch" },
          flexGrow: 1,
          ml: 30,
          mt: 10,
          mb: 10,
          border: "1px solid black",
          maxWidth: "740px",
          p: 6,
          borderRadius: "5px",
        }}
        noValidate
        onSubmit={sumbitHandler}
        autoComplete="off"
      >
        <form onSubmit={sumbitHandler}>
          <FormLabel
            style={{ textAlign: "center", fontSize: "36px" }}
            component="legend"
          >
            New Clerk
          </FormLabel>

          <Toolbar />
          <div>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              required
              onChange={handleChange}

            />
            <TextField
              id="outlined-basic"
              label="Staff Number"
              name="staffNum"
              variant="outlined"
              required
              onChange={handleChange}

            />
          </div>
   


 

            <Button
              type="submit"
              color="success"
              style={{ float: "right" }}
              variant="contained"
              onClick={sumbitHandler}
            >
              Add
            </Button>

        </form>
      </Box>
    </Box>
  );
};

export default AddClerk;
