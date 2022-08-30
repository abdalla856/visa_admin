
import React from "react";
import Box from '@mui/material/Box';
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

  


const BarChart = () => {
  const data = [ ];
  var ikad=0 , visa =0
const apps = useSelector((state) =>state.apps)
if(apps.Apps!==undefined){
apps.Apps.forEach(app => {
  app.type!=="i-kad" ? visa++ :ikad++
})
}
console.log(ikad)
data.push(visa , ikad)

      return (
        <Box sx ={{backgroundColor:"white"}}>
      <div style={{ width:400 ,marginTop:"60px"}}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["Visa",  "i-kad"],
            datasets: [
              {
                // Label for bars
                label: "total count",
                // Data or value of your each variable
                data: data,
                // Color of each bar
                backgroundColor: ["#E74E4B", "#4D97F3"],
                // Border color of each bar
                borderColor: ["#E74E4B", "#4D97F3"],
                borderWidth: 0.1,
              },
            ],
          }}
          // Height of graph
          height={300}
         
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
      </Box>
      );
};
export default BarChart;
