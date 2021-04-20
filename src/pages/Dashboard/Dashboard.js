import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRupeeSign } from "react-icons/fa";
import "./Dashboard.css";
import BarChartModel from "./BarChart";
import PieChartModel from "./PieChart";
import LineGraphModel from "./LineGraph";
import HorizontalBarChart from "./HorizontalBarChart";
import HorizontalBar1 from "./HorizontalBar";

export default function Dashboard() {
  return (
    <div className="MainDashboardContainer">
      <div className="HeaderRow_1">
        <div className="PageHeader">
          <span> Dashboard </span>
        </div>
        <div className="DBSearchBar">
          <input type="text" placeholder="Search here..."></input>
          {/* go button required */}
        </div>
        <div className="ProfileContainer">
          <div className="noticationIcon">
            <IoMdNotificationsOutline> </IoMdNotificationsOutline>
          </div>
          <div className="ProfileContainer" />
          <div className="ProfileIconContainer">
            <CgProfile> </CgProfile>
          </div>
          <div className="profileName">
            <span> SumitKumar Deshpande </span>
          </div>
        </div>
      </div>
      <div className="QuickReviewRow_2">
        <div className="QRContainer">
          <div className="HeaderContainer">
            <div className="QRHeading">Rs 20 Lack</div>
            <div className="QRSubHeading">Total Expenses</div>
          </div>
          <div className="QRtrailingIcon">
            <FaRupeeSign />
          </div>
        </div>
        <div className="QRContainer">
          <div className="HeaderContainer">
            <div className="QRHeading">Rs 30 Lack</div>
            <div className="QRSubHeading">Total Profit</div>
          </div>
          <div className="QRtrailingIcon">
            <FaRupeeSign />
          </div>
        </div>
        <div className="QRContainer">
          <div className="HeaderContainer">
            <div className="QRHeading">Rs 10 Lack</div>
            <div className="QRSubHeading">Total Revenue</div>
          </div>
          <div className="QRtrailingIcon">
            <FaRupeeSign />
          </div>
        </div>
      </div>

      <div className="MainGraphsRow_3">
        <div className="chartContainer">
          <BarChartModel />
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
