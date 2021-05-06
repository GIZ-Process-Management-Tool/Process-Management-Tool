import React from "react";
import { useState, useEffect} from 'react';
import { Doughnut } from "react-chartjs-2";
import Axios from 'axios';
import './graphs.css';

export default function PieChartModel() {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);
  // var dt = '';
  const [date, setDate] = useState('');

  const chart = () => {
    let loom = [];
    let totalmtr = [];
    Axios
      .get(`http://localhost:3006/piechart/${date}`)
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          loom.push("loom " + dataObj.loom_no);
          totalmtr.push(parseInt(dataObj.total_mtr));
        }
        setChartData({
          labels: loom,
          datasets: [
            {
              label: "Looming",
              data: totalmtr,
              backgroundColor: [
              "#ff0066",
              "#ff0080",
              "#e600ac",
              "#b909b9",
              "#7209b7",
              "#3f37c9",
              "#0099ff",
              "#66c2ff",
              "#ade8f4",
              "#caf0f8"

              // "#ff6666",
              // "#ffcc66",
              // "#ccff66",
              // "#66ff66",
              // "#00ffcc",
              // "#33ccff",
              // "#cc99ff",
              // "#ff00ff",
              // "#cc99ff",
              // "#00cc66",
            ]
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });

  };


    // ------------------------------------Without Default date----------------------------------------------

    useEffect(() => {
      if(date) {
        setLoading(true);
        chart();
      }
    }, []);

  // ------------------------------------For Default date----------------------------------------------

// useEffect(() => {
//     Axios.get(`http://localhost:3006/piechart`).then((res) => {
//       console.log("res data....");
//       console.log(res.data);
//       var d1 = res.data[0].l_date;
//       console.log("res data[0] ldate");
//       console.log(res.data[0].l_date);
//       dt = new Date(d1);
//       // var options = {month : "short", day: "numeric", year: "numeric"};
//       dt = dt.toLocaleDateString("fr-CA");
//       setDate(dt);
//       // return date;
//       // setDate(res.data[0].l_date);
//       console.log("dt...");
//       console.log(dt);
//       console.log("Date in useffect......");
//       console.log("date here....." + date);
//     });
//     setLoading(true);
//     if (date) {
//       // setLoading(true);
//       chart();
//     };
//   }, []);

  return (
    <div>
      <div className="header">
        <h2 className="title">Total meter produced on each loom</h2>
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

      {/* ------------------------------------For Default date---------------------------------------------- */}
      {/* {loading ? (
      <Doughnut
        data={chartData}
        options={{
          title: {
            display: true,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
      ) : (<h1>Loading.....</h1>)} */}

      {/* ------------------------------------For Default date---------------------------------------------- */ }

      <Doughnut
        data={chartData}
        options={{
          title: {
            display: true,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />

    </div>
  )
}
