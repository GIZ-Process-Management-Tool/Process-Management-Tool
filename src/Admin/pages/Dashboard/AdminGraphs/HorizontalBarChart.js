import React from "react";
import { Bar } from "react-chartjs-2";
import { useState, useEffect} from 'react';
import Axios from 'axios';


const options = {
  // responsive: true,
  // type: "bar",
  // indexAxis : 'y',

  scales: {
    yAxes: [
      {
        ticks: {beginAtZero: true},
      },
    ],
  }
};

  export default function HorizontalBarChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let date = [];
    let totalpicks1 = [];
    let totalpicks2 = [];

    Axios
      .get("http://localhost:3006/horizontalBchart")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          console.log(res.data);
          var d1 = dataObj.s_date
          var dt = new Date(d1);
          var options = {month : "short", day: "numeric", year: "numeric"};
          date.push(dt.toLocaleDateString("en-US", options));
          totalpicks1.push(parseInt(dataObj.tp1));
          totalpicks2.push(parseInt(dataObj.tp2));
        }
        console.log("date" + date, "tp1" + totalpicks1, "tp2" + totalpicks2);
        setChartData({
          labels: date,
          datasets: [
            {
              label: "Shift 1",
              data: totalpicks1,
              backgroundColor: "#BB8FCE"
            },
            {
              label: "Shift 2",
              data: totalpicks2,
              backgroundColor: "#665191"
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(empSal, empAge);

  };

  useEffect(() => {
    chart();
  }, []);

  return (
  <div>
    <div className="header">
      <h2 className="title"> Meters produced at each loom </h2>
      <br/>
    </div>
    <Bar data={chartData} options={options} />
  </div> );

  };


