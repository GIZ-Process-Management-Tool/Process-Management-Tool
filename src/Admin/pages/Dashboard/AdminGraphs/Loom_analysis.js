import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect} from 'react';
import Axios from 'axios';

export default function GroupedBar() {

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) 
  {
      dd='0'+dd;
  } 

  if(mm<10) 
  {
      mm='0'+mm;
  } 

  var defaultDate = yyyy + '-' + mm + '-' + dd;
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({});
  const [date, setDate] = useState(`${defaultDate}`);

  const chart = () => {
    let loom = [];
    let target = [];
    let rs_generated = [];


    Axios
      .get(`http://localhost:3006/loom_analysis/${date}`)
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

  // useEffect(() => {
  //   chart();
  // }, []);

  useEffect(() => {
    Axios.get(`http://localhost:3006/loom_analysis`).then((res) => {
      console.log("res data....");
      console.log(res.data);
      var d1 = res.data[0].l_date;
      console.log("res data[0] ldate");
      console.log(res.data[0].l_date);
      var dt = new Date(d1);
      // var options = {month : "short", day: "numeric", year: "numeric"};
      dt = dt.toLocaleDateString("fr-CA");
      setDate(dt);
      // return date;
      // setDate(res.data[0].l_date);
      console.log("dt...");
      console.log(dt);
      console.log("Date in useffect......");
      console.log("date here....." + date);
    });
    setLoading(true);
    if (date) {
      chart();
    };
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

    {loading ? (
    <Bar data={chartData}
    options={
      {scales: {
        yAxes: [
          {
            ticks: {beginAtZero: true,},
          },
        ],
      }}
    } /> ) : (<h1>Loading.....</h1>)}
    </div>
  )
};

