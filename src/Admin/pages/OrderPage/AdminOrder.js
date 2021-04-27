import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import "../Dashboard/Dashboard.css";
import "../../style/allPageCss.css";
import MainNavBar from "../Dashboard/Components/AdminNavBar/MainNavBar";
import Card1 from "./Card1";
import "./Newcard.css";

export default function Order() {
  return (
    <div className="MainDashboardContainer">
      <MainNavBar />
      <div className="orderContent">
        <div className="all">
          <div className="recentorder">
            <h1 className="recentorders"> Recent Orders</h1>
            <Card1 />
            <br />
            <Card1 />
            <br />
            <Card1 />
          </div>
          <div className="inprocessing">
            <h1 className="recentorders"> In Processing </h1>
            <div>
              <Card1 />
              <br />
              <Card1 />
            </div>
          </div>

          <div className="completed">
            <h1 className="recentorders"> Completed </h1>
            <div>
              <Card1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
