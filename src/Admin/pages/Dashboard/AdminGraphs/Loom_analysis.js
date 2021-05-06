import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect} from 'react';
import Axios from 'axios';

export default function GroupedBar() {
  const [chartData, setChartData] = useState({});
  const [Date, setDate] = useState();

  const chart = () => {
    let loom = [];
    let target = [];
    let rs_generated = [];


    Axios
      .get(`http://localhost:3006/loom_analysis/${Date}`)
      .then(res => {
        // console.log(res);
        for (const dataObj of res.data) {
          loom.push("loom " + dataObj.loom_no);
          target.push(parseInt(dataObj.target_rs));
          rs_generated.push(parseInt(dataObj.rs_generated));
        }
        setChartData({
          labels: loom,
          datasets: [
            {
              label: "Target",
              data: target,
              // backgroundColor: "#08bdf7",
              backgroundColor: "#A070FF"
            },
            {
              label: "Rs generated",
              data: rs_generated,
              // backgroundColor: "#bd4ef9",
              backgroundColor: "#26D6E3"
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
      <h2 className='title'>Target vs Rs generated per loom</h2>
      <br/>
          <input
              type="date"
              placeholder="date"
              className="Calender"
              required
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
          <input
            type="submit"
            value="Show"
            className="showButton"
            onClick={chart}
          />
          <br/>
    </div>
    <Bar data={chartData}
    options={
      {scales: {
        yAxes: [
          {
            ticks: {beginAtZero: true,},
          },
        ],
      }}
    } />
    </div>
  )
};

