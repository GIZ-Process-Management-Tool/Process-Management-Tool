import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect} from 'react';
import Axios from 'axios';

export default function GroupedBar() {
  
  // const [l_date, setDate] = useState(0);

  // const submitDate = () => {
  //   Axios.post("http://localhost:3006/date_for_loomwise", {
  //     l_date: l_date,
  //   }).then(() => {
  //     console.log(l_date);
  //   });
  // };


  const [chartData, setChartData] = useState({});

  const chart = () => {
    let loom = [];
    let target = [];
    let rs_generated = [];

    Axios
      .get("http://localhost:3006/loom_analysis")
      .then(res => {
        console.log(res);
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
              backgroundColor: "#b4aee8",
              hoverBackgroundColor: "#b4aee8"
            },
            {
              label: "Rs generated",
              data: rs_generated,
              backgroundColor: "#ffd384",
              hoverBackgroundColor: "#ffd384"
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
          {/* <input
              type="date"
              placeholder="date"
              required
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          <input
            type="submit"
            value="Show"
            onClick={submitDate}
          /> */}
    </div>
    <Bar data={chartData}
    options={
      {scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      }}
    } />
    </div>
  )
};

