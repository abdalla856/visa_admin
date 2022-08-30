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
import { findClerk, updateClerk } from "../../../actions/admin";
import "./update_clerks.css";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router";

const UpdateClerk = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    name: "",
    staffNum: "",
    id: "",
  });

  const { id } = useParams();
  React.useEffect(() => {
    dispatch(findClerk(id));
  }, [dispatch]);
  const ck = useSelector((state) => state.clerk);

  React.useEffect(() => {
    if (ck.length > 0 || ck.clerk) {
      setValues({
        ...values,
        name: ck.clerk.name,
        staffNum: ck.clerk.staffNum,
        id: ck.clerk._id,
      });
    }
  }, [ck]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    try {
      dispatch(updateClerk(values));
    } catch (err) {
      alert(err.response);
    }
    history('/dashboard',{ replace: true });
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
            Update Clerk
          </FormLabel>

          <Toolbar />
          <div>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              placeholder={values.name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Staff Number"
              name="staffNum"
              variant="outlined"
              placeholder={values.staffNum}
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

export default UpdateClerk;
