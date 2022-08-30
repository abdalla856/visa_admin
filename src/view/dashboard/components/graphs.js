import * as React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import "./graphs.css";
import CardContent from "@mui/material/CardContent";
import BarChart from "./barchrt";
import Typography from "@mui/material/Typography";
import  PieChart  from "./piechart";
import LineChart from './linechart'
import Map from './map'
import { useSelector } from "react-redux";

export default function Graphs() {
  const st = useSelector((state) =>state.student)
  const ck = useSelector((state) =>state.clerk)
  const apps = useSelector((state) =>state.apps)
  var st_num =0 ,ck_num=0  
  var ikad=0 , visa =0
  if(apps.Apps!==undefined && ck.users !== undefined && st.users !== undefined){
  apps.Apps.forEach(app => {
    app.type!=="i-kad" ? visa++ :ikad++
  })
  st_num = st.users.length
  ck_num = ck.users.length
  } 
  return (
    <Box>
      <h3 className="panel_head">Dashboard</h3>
      <Stack spacing={6} direction="row" className="num_cards">
        <Card
          sx={{
            width: 200,
            height: 100,
            mt: 1,
            ml: 10,
            backgroundColor: "#E74E4B",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "white", textAlign: "center" }}
            >
              Visa
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", mb: 1.5, textAlign: "center" }}
              color="text.secondary"
            >
              {visa}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 200,
            height: 100,
            mt: 5,
            ml: 4,
            backgroundColor: "#4D97F3",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center", color: "white" }}
            >
              I-kad
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 1.5, textAlign: "center", color: "white" }}
              color="text.secondary"
            >
              {ikad}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 200,
            height: 100,
            mt: 5,
            ml: 4,
            backgroundColor: "#489689",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center", color: "white" }}
            >
              Students
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 1.5, textAlign: "center", color: "white" }}
              color="text.secondary"
            >
              {st_num}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 200,
            height: 100,
            mt: 5,
            ml: 4,
            backgroundColor: "#3F51B5",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center", color: "white" }}
            >
              Clerks
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 1.5, textAlign: "center", color: "white" }}
              color="text.secondary"
            >
              {ck_num}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Box>
<Stack direction="row" spacing={7} sx={{ml:10,mt:5}}>
  
      <BarChart />
      <PieChart/>
</Stack>
      </Box>
      <Box>

      <Stack direction="row" spacing={7} sx={{ml:10,mt:5}}>

      <LineChart/>
      <Map/>

</Stack>
        

      </Box>

    
    </Box>
  );
}
