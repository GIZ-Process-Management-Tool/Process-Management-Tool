import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="MainDashboardContainer">
        <div className="HeaderRow_1">
          <div className="PageHeader">
            <span>Dashboard</span>
          </div>
          <div className="DBSearchBar">
            <input type="text" placeholder="Search here..."></input>
          </div>
          <div className="ProfileContainer">
            <div className="noticationIcon">
              <IoMdNotificationsOutline></IoMdNotificationsOutline>
            </div>
            <div classNmae="ProfileContainer" />
            <div className="ProfileIconContainer">
              <CgProfile></CgProfile>
            </div>
            <div className="profileName">
              <span>SumitKumar Deshpande</span>
            </div>
          </div>
        </div>
        <div className="QuickReviewRow_2"></div>
        <div className="MainGraphsRow_3"></div>
      </div>
    </>
  );
}
