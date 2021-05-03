import React from "react";

import "../Dashboard/Dashboard.css";
import "../../style/allPageCss.css";
import MainNavBar from "../Dashboard/Components/AdminNavBar/MainNavBar";

import OrderCard from "./OrderCard.js";
import "./OrderCard.css";

export default function Order() {
  return (
    <div className="MainDashboardContainer">
      <MainNavBar />
      <div className="orderContent">
        <div className="all">
          <div className="recentorder">
            <h1 className="recentorders"> Recent Orders</h1>
            <OrderCard />
            <br />
            <OrderCard />
            <br />
            <OrderCard />
          </div>
          <div className="inprocessing">
            <h1 className="recentorders"> In Processing </h1>
            <div>
              <OrderCard />
              <br />
              <OrderCard />
            </div>
          </div>

          <div className="completed">
            <h1 className="recentorders"> Completed </h1>
            <div>
              <OrderCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
