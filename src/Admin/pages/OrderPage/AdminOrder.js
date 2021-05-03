import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Dashboard/Dashboard.css";
import "../../style/allPageCss.css";
import MainNavBar from "../Dashboard/Components/AdminNavBar/MainNavBar";

import OrderCard from "./OrderCard.js";
import "./OrderCard.css";

export default function Order() {
  const [data, setData] = useState([]);

  useEffect((e) => {

    axios
      .get("http://localhost:3006/cardValue")
      .then((res) => {
        setData(res.data);
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
        
      });

  }, []);
  return (
    <div className="MainDashboardContainer">
      <MainNavBar />
      <div className="orderContent">
        <div className="all">
          <div className="recentorder">
            <h1 className="recentorders"> Recent Orders</h1>
            {data.filter((element) => {
              return element.status == 1;
            })
              .map((indexData, index) => {
                return <OrderCard
                  key={index}

                  order_no={indexData.order_no}
                  status={indexData.status}
                  date={indexData.date}
                  ppc={indexData.ppc}
                  quality={indexData.quality}
                  rate={indexData.rate}
                  company={indexData.company}
                  gst={indexData.gst}
                />

              })
            }
            {/* <OrderCard />
            <br />
            <OrderCard />
            <br />
            <OrderCard /> */}
          </div>
          <div className="inprocessing">
            <h1 className="recentorders"> In Processing </h1>
            {data.filter((element) => {
              return element.status == 2;
            })
              .map((indexData, index) => {
                return <OrderCard
                  key={index}

                  order_no={indexData.order_no}
                  status={indexData.status}
                  date={indexData.date}
                  ppc={indexData.ppc}
                  quality={indexData.quality}
                  rate={indexData.rate}
                  company={indexData.company}
                  gst={indexData.gst}
                />

              })
            }
            {/* <div>
              <OrderCard />
              <br />
              <OrderCard />
            </div> */}
          </div>

          <div className="completed">
            <h1 className="recentorders"> Completed </h1>
            {data.filter((element) => {
              return element.status == 3;
            })
              .map((indexData, index) => {
                return <OrderCard
                  key={index}

                  order_no={indexData.order_no}
                  status={indexData.status}
                  date={indexData.date}
                  ppc={indexData.ppc}
                  quality={indexData.quality}
                  rate={indexData.rate}
                  company={indexData.company}
                  gst={indexData.gst}
                />

              })
            }
            {/* <div>
              <OrderCard />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}