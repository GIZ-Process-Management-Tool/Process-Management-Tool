import React from 'react';
import { Line } from 'react-chartjs-2';
import { useState, useEffect} from 'react';
import Axios from 'axios';

export default function LineChart(){
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let s_date = [];
    let balance1 = [];
    let balance2 = [];

    Axios
      .get("http://localhost:3006/shift_analysis")
      .then(res => {
        // console.log(res);
        for (const dataObj of res.data) {
          var dt = dataObj.s_date.toLocaleString();
          console.log(dt)
          s_date.push(dt);
          if (dataObj.shift === 1){balance1.push(parseInt(dataObj.balance));}
          if (dataObj.shift === 2){balance2.push(parseInt(dataObj.balance));}
        }
        setChartData({
          labels: s_date,
          datasets: [
            {
              label: "Shift1",
              data: balance1,
              backgroundColor: 'rgba(255, 255, 128, 0.3)',
              hoverBackgroundColor: 'rgba(255, 255, 128, 0.3)'
            },
            {
              label: "Shift2",
              data: balance2,
              backgroundColor: 'rgba(77, 255, 184, 0.3)',
              hoverBackgroundColor: 'rgba(77, 255, 184, 0.3)'
            },
          ],
        });
      })
      .catch(err => {
        console.log(err);
      });

      console.log(balance1, balance2);

  };


  useEffect(() => {
    chart();
  }, []);


  return (
    <div>
      <div className='header'>
        <h2 className='title'>Shift wise balance for the week</h2>
      </div>
      <Line data={chartData}
      options={
        {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
        }
      } />
    </div>
  )


};



