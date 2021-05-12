import React from "react";
import { useState, useEffect} from 'react';
import { Doughnut } from "react-chartjs-2";
import Axios from 'axios';
import './graphs.css';

export default function PieChartModel() {
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
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(`${defaultDate}`);

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

    // useEffect(() => {
    //   if(date) {
    //     setLoading(true);
    //     chart();
    //   }
    // }, []);
 // ------------------------------------Without Default date----------------------------------------------



  // ------------------------------------For Default date----------------------------------------------

useEffect(() => {
    Axios.get(`http://localhost:3006/piechart`).then((res) => {
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
// ------------------------------------For Default date----------------------------------------------


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

 {/* ------------------------------------For Default date----------------------------------------------  */}
      {loading ? (
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
      ) : (<h1>Loading.....</h1>)}
      </div>  )}
      {/* ------------------------------------For Default date---------------------------------------------- */}


    {/* ------------------------------------Without Default date---------------------------------------------- */ }
    {/* <Doughnut
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
} */}
  {/* ------------------------------------Without Default date---------------------------------------------- */ }






//--------------------Smaple code--------------------------------

// export default function PieChartModel() {
//   const [content, setContent] = useState('');
//   const [date, setDate] = useState('2021-05-05');

//   const showContent = () => {
//       setContent(`The date now is : ${date}`)
//   }

//   // const setDefaultDate = async() => {
//   //   setDate('2021-03-06');
//   //   console.log("Date in useeffect" + date)
//   //   showContent();
//   // };

//   useEffect(() =>{
//     setDate('2021-03-06');
//     console.log("Date in useeffect" + date)
//     showContent();
//     // setDefaultDate();
//     // return ('');
//   }, []);


//   return(
//     <div>
//       {/* <button onClick={()=> setDate('2021-03-07')}>
//         setDate
//       </button> */}
//       <input
//         type="date"
//         placeholder="date"
//         className="Calender"
//         required
//         onChange={(e) => {
//           setDate(e.target.value);
//         }}
//       ></input>
//       <button onClick={showContent}>
//       show
//       </button>
//       {content}
//     </div>
//   )
// }
