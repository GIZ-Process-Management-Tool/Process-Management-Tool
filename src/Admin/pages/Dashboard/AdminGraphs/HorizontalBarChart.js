import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { useState, useEffect} from 'react';
import Axios from 'axios';


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

  export default function HorizontalBarChart() {
  const [chartData, setChartData] = useState({});
  // const [LoomNo, setLoomNo] = useState([]);
  // const [TotalPicks, setTotalPicks] = useState([]);

  const chart = () => {
    let loom = [];
    let meter = [];

    Axios
      .get("http://localhost:3006/horizontalBchart")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          loom.push("loom " + dataObj.loom_no);
          meter.push(parseInt(dataObj.meter));
        }
        setChartData({
          labels: loom,
          datasets: [
            {
              label: "Looming",
              data: meter,
              backgroundColor: [
              "#BB8FCE",
              "#A9CCE3",
              "#665191",
              "#F9E79F",
              "#CCD1D1"
            ],
              hoverBackgroundColor: [
                // "#A569BD",
                // "#2b4775",
                // "#624e8c",
                // "#ffbb33",
                // "#9999ff",
                "#BB8FCE",
                "#A9CCE3",
                "#665191",
                "#F9E79F",
                "#CCD1D1"
              ]
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
      <h1 className="title"> Meters produced at each loom </h1>
      <div className="links"> </div>
    </div>
    <HorizontalBar data={chartData} options={options} />
  </div> );

  };


