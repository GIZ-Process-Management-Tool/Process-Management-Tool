import React from "react";
import { useState, useEffect} from 'react';
import { Doughnut } from "react-chartjs-2";
import Axios from 'axios';

export default function PieChartModel() {
  const [chartData, setChartData] = useState({});
  // const [LoomNo, setLoomNo] = useState([]);
  // const [TotalPicks, setTotalPicks] = useState([]);

  const chart = () => {
    let loom = [];
    let totalpicks = [];

    Axios
      .get("http://localhost:3006/piechart")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          loom.push("loom " + dataObj.loom_no);
          totalpicks.push(parseInt(dataObj.total_picks));
        }
        setChartData({
          labels: loom,
          datasets: [
            {
              label: "Looming",
              data: totalpicks,
              backgroundColor: [
              "#BB8FCE",
              "#A9CCE3",
              "#665191",
              "#F9E79F",
              "#CCD1D1 "
            ],
              hoverBackgroundColor: [
                "#BB8FCE",
                "#A9CCE3",
                "#665191",
                "#F9E79F",
                "#CCD1D1 "
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
      <Doughnut
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Total picks on each loom",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
