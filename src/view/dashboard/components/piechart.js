import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";



const PieChart = () => {
  const linedata = [];
const pdata = {
  labels: ["Students", "Clerks"],
  datasets: [
    {
      label: "# of users",
      data: linedata,
      backgroundColor: [
        "#489689",
        "#3F51B5",
   
      ],
      borderColor: [
        "#489689",
        "#3F51B5",
        
      ],
      borderWidth: 1,
    },
  ],
};



  const st = useSelector((state) =>state.student)
  const ck = useSelector((state) =>state.clerk)


  if(st.users!==undefined &&ck.users!==undefined){
    
    // linedata.push(ck.users.length)
    linedata.push(st.users.length)
    linedata.push(ck.users.length)
  }


  // if(){

  //   // linedata.push(st.users.length)
  // }
  return (
    <div style={{  width: "450px", marginTop:"100px" }}>
      <Doughnut data={pdata} />
    </div>
  );
};

export default PieChart;
