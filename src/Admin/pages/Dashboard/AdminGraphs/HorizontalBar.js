import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { useState, useEffect} from 'react';
import Axios from 'axios'; //import Horizontal Bar module from react-chart-js-2

const mydata = {
  labels: ["Date1", "Date2", "Date3", "Date4", "Date5", "Date6", "Date7"],
  datasets: [
    {
      label: "shift1",
      data: [200, 150, 100, 204, 305],
      backgroundColor: "#BB8FCE"
    },
    {
      label: "shift2",
      data: [194, 30, 104, 210, 100],
      backgroundColor: "#FFCE56"
    },
  ],
};

const options = {
  scales: {
       xAxes: [{
           stacked: true
       }],
       yAxes: [{
           stacked: true
       }]
   }
}

export default function HorizontalBar1() {

  const [chartData, setChartData] = useState({});

  const chart = () => {
    let s_date = [];
    let tp1 = [];
    let tp2 = [];

    Axios
      .get("http://localhost:3006/horizontalBchart")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          var d1 = dataObj.s_date
          var dt = new Date(d1);
          var options = {month : "short", day: "numeric", year: "numeric"};
          s_date.push(dt.toLocaleDateString("en-US", options));
          tp1.push(parseInt(dataObj.tp1));
          tp2.push(parseInt(dataObj.tp2));
        }
        setChartData({
          labels: s_date,
          datasets: [
            {
              label: "Shift1",
              data: tp1,
              backgroundColor: '#9d4edd',
            },
            {
              label: "Shift2",
              data: tp2,
              backgroundColor: '#ff78dd',
            },
          ],
        });
      })
      .catch(err => {
        console.log(err);
      });
  };


  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <div className='header'>
      <h2 className='title'>Total picks produced in both shifts</h2>
      </div>
      <HorizontalBar
        data={chartData}
        options={options}
      />
    </div>
  );
}
