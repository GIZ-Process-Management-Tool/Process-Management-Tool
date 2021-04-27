import React from "react";
import "./Newcard.css";
import Card1 from "./Card1";
const Newcard = () => {
  return (
    <div className="all">
      <div className="recentorder">
        <h1 className="recentorders"> Recent Orders</h1>
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div className="inprocessing">
        <h1 className="recentorders"> In Processing </h1>
        <div>
          <Card1 />
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
  );
};

export default Newcard;
