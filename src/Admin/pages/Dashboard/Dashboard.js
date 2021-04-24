import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRupeeSign } from "react-icons/fa";
import "./Dashboard.css";
// import BarChartModel from "./BarChart";
import PieChartModel from "./AdminGraphs/PieChart";
import LineGraphModel from "./AdminGraphs/LineGraph";
import HorizontalBarChart from "./AdminGraphs/HorizontalBarChart";
import HorizontalBar1 from "./AdminGraphs/HorizontalBar";
import Timeline from "./Components/ProgressTracking/timeline";
import HeaderProgressTrack from "./Components/ProgressTracking/HeaderProgressTrack";

export default function Dashboard() {
  return (
    <div className="MainDashboardContainer">
      <div className="HeaderRow_1">
        <div className="PageHeader">
          <span> Dashboard </span>
        </div>
        <div className="DBSearchBar">
          <input type="text" placeholder="Search here..."></input>
        </div>
        <div className="ProfileContainer">
          <div className="noticationIcon">
            <IoMdNotificationsOutline> </IoMdNotificationsOutline>
          </div>
          <div classNmae="ProfileContainer" />
          <div className="ProfileIconContainer">
            <CgProfile> </CgProfile>
          </div>
          <div className="profileName">
            <span> Sumit Deshpande </span>
          </div>
        </div>
      </div>
      <div className="QuickReviewRow_2">
        <div className="QRContainer">
          <div className="HeaderContainer">
            <div className="QRHeading"> Rs 20 Lack </div>
            <div className="QRSubHeading"> Total Expenses </div>
          </div>
          <div className="QRtrailingIcon">
            <FaRupeeSign />
          </div>
        </div>
        <div className="QRContainer">
          <div className="HeaderContainer">
            <div className="QRHeading"> Rs 30 Lack </div>
            <div className="QRSubHeading"> Total Profit </div>
          </div>
          <div className="QRtrailingIcon">
            <FaRupeeSign />
          </div>
        </div>
        <div className="QRContainer">
          <div className="HeaderContainer">
            <div className="QRHeading"> Rs 10 Lack </div>
            <div className="QRSubHeading"> Total Revenue </div>
          </div>
          <div className="QRtrailingIcon">
            <FaRupeeSign />
          </div>
        </div>
      </div>
      <div className="MainGraphsRow_3">
        <div className="chartContainer progressBar">
          <HeaderProgressTrack />
          <Timeline />
        </div>
        <div className="chartContainer">
          <PieChartModel />
        </div>
        <div className="chartContainer">
          <LineGraphModel />
        </div>
        <div className="chartContainer">
          <HorizontalBarChart />
        </div>
        <div className="chartContainer">
          <HorizontalBar1 />
        </div>
      </div>
    </div>
  );
}
