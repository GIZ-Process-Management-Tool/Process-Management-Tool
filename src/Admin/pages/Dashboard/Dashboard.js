import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import "./Dashboard.css";
// import BarChartModel from "./BarChart";
import PieChartModel from "./AdminGraphs/PieChart";
import GroupedBar from "./AdminGraphs/Loom_analysis";
import LineChart from "./AdminGraphs/shift_analysis";
import LineGraphModel from "./AdminGraphs/LineGraph";
// import HorizontalBarChart from "./AdminGraphs/HorizontalBarChart";
import HorizontalBar1 from "./AdminGraphs/HorizontalBar";
import Timeline from "./Components/ProgressTracking/timeline";
import HeaderProgressTrack from "./Components/ProgressTracking/HeaderProgressTrack";
import MainNavBar from "./Components/AdminNavBar/MainNavBar";

export default function Dashboard() {

  const [wttiList, setWttiList] = useState([]);
  const [covertedDate, convertDate] = useState();


  useEffect((e) => {
    Axios.get("http://localhost:3006/getWtti")
    .then((response) => {
      console.log(response.data);
      setWttiList(response.data);
      var d1 = response.data[0].w_date;
      var dt = new Date(d1);
      var options = {month : "short", day: "numeric", year: "numeric"};
       convertDate(dt.toLocaleDateString("en-US", options));
      // console.log("This is ...." + wttiList.w_date);
    })
    .catch((err) => {
      console.log(err);
    }); 
    }, []);

  return (
    <div className="MainDashboardContainer">
      <MainNavBar />
      <div className="mainContent">
        <div className="QuickReviewRow_2">
          {/* <div className="QRContainer">
            <div className="HeaderContainer">
              <div className="QRHeading"> Rs 20 Lakh </div>
              <div className="QRSubHeading"> Balance for the day </div>
            </div>
            <div className="QRtrailingIcon">
              <FaRupeeSign />
            </div>
          </div> */}
          <div className="QRContainer">
           {wttiList.map((val, key) =>{
                return (
                  <div className="HeaderContainer">
                  <div className="QRHeading">
                    {val.target_asDate}
                  </div>
                  <div className="QRSubHeading"> Target on - {covertedDate} </div>
                   </div>
                      );
            })}
            <div className="QRtrailingIcon">
              <FaRupeeSign />
            </div>
          </div>
          <div className="QRContainer">
          {wttiList.map((val, key) =>{
                return (
                <div className="HeaderContainer"> 
                  <div className="QRHeading">
                    {val.achieved_asDate}
                  </div>
                <div className="QRSubHeading"> Total picks achieved on - {covertedDate} </div>
                </div>
                    );
            })}
            <div className="QRtrailingIcon">
              <FaRupeeSign />
            </div>
          </div>

          <div className="QRContainer">

              {wttiList.map((val, key) =>{
                return (
                <div className="HeaderContainer">
                  <div className="QRHeading">
                    {val.balance_asDate}
                  </div>
                <div className="QRSubHeading"> Balance on - {covertedDate} </div>
            </div>
             );
             })}
            <div className="QRtrailingIcon">
              <FaRupeeSign />
            </div>
          </div>

        </div>
        <div className="MainGraphsRow_3">
          <div className="chartContainer progressBar">
            <HeaderProgressTrack />
            {/* <Timeline /> */}
          </div>
          <div className="chartContainer">
          <GroupedBar />
          </div>
          <div className="chartContainer">
          <LineChart />
          </div>
          <div className="chartContainer">
          <PieChartModel />
          </div>
        <div className="chartContainer">
          <HorizontalBar1 />
        </div>
          </div>
        </div>
      </div>
  );
}
