import * as React from "react";
import Box from "@mui/material/Box";
import DrawerAndAppBar from "../../../shared/drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FormLabel, InputLabel, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findStudent , updateStudent } from "../../../actions/admin";
import "./update_student.css";
import { useParams } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import { HomeMiniTwoTone } from "@mui/icons-material";
import { useNavigate } from "react-router";

const UpdateStudent = () => {
  const history = useNavigate()

  const options = React.useMemo(() => countryList().getData(), []);

  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    matric: "",
    fullName: "",
    DateOfBirth: "",
    DateOfIssue: "",
    faculty: "",
    major: "",
    passport: "",
    HomeTown: "",
    address: "",
    id:"",
    photo:""
  });
  const [homeTown, setHomeTown] = React.useState(values.HomeTown);
  const changeHandler = (value) => {
    setHomeTown(value);
    console.log(value);
  };
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(findStudent(id));
  }, [dispatch]);
  const st = useSelector((state) => state.student);
console.log(st)
  React.useEffect(() => {
    if(st.length > 0 || st.student) {
    setValues({
      ...values,
      matric: st.student.matric,
      fullName: st.student.fullName,
      faculty: st.student.faculty,
      major: st.student.major,
      passport: st.student.passport,
      HomeTown: st.student.HomeTown,
      address: st.student.address,
      id:st.student._id,
      DateOfBirth: st.student.DateOfBirth,
      DateOfIssue: st.student.DateOfIssue,
      photo: st.student.photo,
    });
  }
  }, [st]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

  };



  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log("hi")
    console.log(values.fullName)
var photo = document.querySelector("#photo");
    var formData = new FormData();
    if(photo!==undefined){formData.append('photo', photo.files[0]);}else{
      formData.append('photo', values.photo);
    }
    formData.append('fullName', values.fullName);
    formData.append('faculty', values.faculty);
    formData.append('major', values.major);
    formData.append('DateOfIssue', values.DateOfIssue);
    formData.append('passport', values.passport);
    if(HomeMiniTwoTone.label !== undefined){
      formData.append('HomeTown', homeTown.label);

    }else{
      formData.append('HomeTown', values.HomeTown);

    }
    formData.append('address', values.address);
    formData.append('matric', values.matric);
    formData.append('DateOfBirth', values.DateOfBirth);
    formData.append('id', values.id);

try{
  dispatch(updateStudent(formData))
}catch(err){
  alert(err.response)
}
history('/dashboard',{ replace: true })

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

      <form className="form__to__apply" onSubmit={sumbitHandler}>
        <h1>
          <FormLabel className="upload_label" component="legend">
            Update Student
          </FormLabel>
        </h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "25ch" },
            flexGrow: 1,
            ml: 20,
            mt: 10,
            mb: 10,
            border: "1px solid black",
            p: "60px",
            borderRadius: "5px",
          }}
          noValidate
          autoComplete="off"
        >
          <FormLabel
            style={{ textAlign: "center", fontSize: "36px" }}
            component="legend"
          >
            Update Student
          </FormLabel>

          <Toolbar />
          <div>
            <TextField
              id="outlined-basic"
              label="Matric Number"
              variant="outlined"
              name="matric"
              placeholder={values.matric}
              onChange={handleChange}

            />
            <TextField
              id="outlined-basic"
              label="Full Name"
              name="fullName"
              variant="outlined"
              placeholder={values.fullName}
              onChange={handleChange}

            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Date of birth"
              variant="outlined"
              name="DateOfBirth"
              type="Date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}

            />
            <TextField
              id="outlined-basic"
              label="Date of Issue"
              variant="outlined"
              name="DateOfIssue"
              type="Date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}

            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Faculty"
              name="faculty"
              placeholder={values.faculty}
              variant="outlined"
              onChange={handleChange}

            />
            <TextField
              id="outlined-basic"
              placeholder={values.major}
              label="Major"
              name="major"
              variant="outlined"
              onChange={handleChange}

            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Passport Number"
              name="passport"
              variant="outlined"
              placeholder={values.passport}
              onChange={handleChange}

            />

            <Select
              options={options}
              value={homeTown}
              onChange={changeHandler}
              name="HomeTown"
              className="select"

            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Address"
              name="address"
              variant="outlined"
              placeholder={values.address}
              onChange={handleChange}

            />
            <TextField
              type="File"
              id="photo"
              name={"photo"}
              variant="standard"
              style={{ marginTop: "30px" }}
              onChange={handleChange}

            />
          </div>
          <Box>
            <Button
            type="submit"
              color="success"
              style={{ float: "right" }}
              variant="contained"
              onClick={sumbitHandler}

            >
              Update
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default UpdateStudent;
