import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import moment from "moment";

const LineChart = () => {
  var Jan= 0,
    Feb= 0,
    Mar= 0,
    Apr= 0,
    May= 0,
    Jun= 0,
    Jul= 0,
    Aug= 0,
    Sep= 0,
    Oct= 0,
    Nov= 0,
    Dec = 0;
    const apps = useSelector((state) => state.apps);
  
    if (apps.Apps !== undefined) {
      apps.Apps.forEach((app) => {
        switch (moment(app.new_date).format("MMM")) {
          case "Jan":
            Jan++;
            break;
          case "Feb":
            Feb++;
            break;
          case "Mar":
            Mar++;
            break;
          case "Apr":
            Apr++;
            break;
          case "May":
            May++;
            break;
          case "Jun":
            Jun++;
            break;
          case "Jul":
            Jul++;
            break;
          case "Aug":
            Aug++;
            break;
          case "Sep":
            Sep++;
            break;
          case "Oct":
            Oct++;
            break;
          case "Nov":
            Nov++;
            break;
          case "Dec":
            Dec++;
            break;
        }
      });
    }
    console.log(Jun)
    React.useEffect(() =>{},[Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec])
  const linedata = [];
  linedata.push(Jan,0, Feb,0, Mar,0, Apr,0, May,0, Jun,0, Jul,0, Aug,0, Sep,0, Oct,0, Nov,0, Dec,0)
  const pdata = {
    labels: [
      "Jan",
      " ",
      "Feb",
      " ",
      "Mar",
      " ",
      "Apr",
      " ",
      "May",
      " ",
      "Jun",
      " ",
      "Jul",
      " ",
      "Aug",
      " ",
      "Sep",
      " ",
      "Oct",
      " ",
      "Nov",
      " ",
      "Dec",
    ],
    datasets: [
      {
        label: "# of applications",
        data: linedata,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ height: "300px", width: "400px", marginTop: "150px" }}>
      <Line data={pdata} />
    </div>
  );
};
export default LineChart;
