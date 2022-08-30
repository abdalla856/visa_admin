import * as React from "react";
import Box from "@mui/material/Box";
import DrawerAndAppBar from "../../../shared/drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FormLabel, TextField, Button } from "@mui/material";
import {CreateStudent} from '../../../actions/admin'
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Select from 'react-select'
import countryList from 'react-select-country-list'
import "./add_new.css";
const AddStudent = () => {
  const history = useNavigate()
  const options = React.useMemo(() => countryList().getData(), [])
  const dispatch = useDispatch()
  const [allValues, setAllValues] = React.useState({
    Birthday: "",
    matric: "",
    fullName: "",
    DateOfIssue: "",
    passport: "",
    HomeTown: "",
    address: "",
    photo: "",
    faculty: "",
    major: "",
  });
  const [homeTown , setHomeTown] = React.useState({})
  const changeHandler = value => {
    setHomeTown(value)

  } 
  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.name.toString() === "photo") {
      setAllValues({ ...allValues, [event.target.name]: event.target.files });
    } else {
      setAllValues({ ...allValues, [event.target.name]: event.target.value });
    }

  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    var photo = document.querySelector("#photo");
    var formData = new FormData();
    formData.append('photo', photo.files[0]);
    formData.append('fullName', allValues.fullName);
    formData.append('faculty', allValues.faculty);
    formData.append('major', allValues.major);
    formData.append('DateOfIssue', allValues.DateOfIssue);
    formData.append('passport', allValues.passport);
    formData.append('HomeTown', homeTown.label);
    formData.append('address', allValues.address);
    formData.append('matric', allValues.matric);
    formData.append('DateOfBirth', allValues.Birthday);

try{
  dispatch(CreateStudent(formData))
}catch(err){
  alert(...(err.response))
}
history('/dashboard',{ replace: true })
  };
  //  alert(allValues.Birthday);
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
        autoComplete="off"
      >
        <form onSubmit={sumbitHandler}>
          <FormLabel
            style={{ textAlign: "center", fontSize: "36px" }}
            component="legend"
          >
            New Student
          </FormLabel>

          <Toolbar />
          <div>
            <TextField
              id="outlined-basic"
              label="Matric Number"
              variant="outlined"
              name="matric"
              required
              onChange={handleChange}

            />
            <TextField
              id="outlined-basic"
              label="Full Name"
              name="fullName"
              variant="outlined"
              required
              onChange={handleChange}

            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Birthday"
              name="Birthday"
              variant="outlined"
              type="date"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              // required
            />
            <TextField
              id="outlined-basic"
              label="Date of Issue"
              variant="outlined"
              name="DateOfIssue"
              type="date"
              onChange={handleChange}

              InputLabelProps={{
                shrink: true,
              }}
              // required
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Faculty"
              variant="outlined"
              required
              onChange={handleChange}
              name ="faculty"
            />
            <TextField
              id="outlined-basic"
              label="Major"
              variant="outlined"
              required
              onChange={handleChange}
name= "major"

            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Passport Number"
              variant="outlined"
              name="passport"
              required
              onChange={handleChange}

            />
            {/* <TextField
              id="outlined-basic"
              label="Home Town"
              variant="outlined"
              name="HomeTown"
              required
              onChange={handleChange}

            /> */}
             <Select options={options} value ={homeTown} onChange={changeHandler} 
              name="HomeTown"
              className="select"
              />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              placeholder="hi"
              name="address"
              required
              onChange={handleChange}

            />
            <TextField
              type="File"
              name="photo"
              variant="standard"
              style={{ marginTop: "30px" }}
              onChange={handleChange}
              inputProps={{
                accept: "image/*",
              }}
              id="photo"
              required
            />
          </div>
          {/* <Box> */}
            <Button
              type="submit"
              color="success"
              style={{ float: "right" }}
              variant="contained"
              onClick={sumbitHandler}
            >
              Add
            </Button>
          {/* </Box> */}
        </form>
      </Box>
    </Box>
  );
};

export default AddStudent;
