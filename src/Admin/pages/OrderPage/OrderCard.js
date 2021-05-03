import React from "react";
import "./OrderCard.css";
import { FaCheckCircle } from "react-icons/fa";

const OrderCard = (props) => {
    var dt = new Date(props.date)
    var date = dt.toLocaleDateString()
    return (
        <div>
            <div className="cardMain">
                {/* <div className="maintop">
          <div></div>
        </div> */}
                <div className="main-2">
                    <img
                        className="main-3"
                        src="https://media.glassdoor.com/sqll/994701/raymond-squarelogo-1584958607938.png"
                        alt="logo"
                    />

                    <div className="main-4">
                        <div className="main-7">
                            <div className="Raymondshawls">{props.company} </div>
                            <div>{props.order_no} </div>
                            <div className="Orderdate"> Order Date: {date} </div>
                        </div>
                    </div>
                </div>

                <div className="main-5">
                    <div className="main-6">
                        <FaCheckCircle
                            style={{
                                padding: "8px",
                                fontSize: "24px",
                                color: "#4054b2",
                            }}
                        />
                        <div>
                            GST
              <br />
                            {props.gst}
                        </div>
                    </div>
                    <div className="main-6">
                        <FaCheckCircle
                            style={{
                                padding: "8px",
                                fontSize: "24px",
                                color: "#4054b2",
                            }}
                        />
                        <div>
                            PPC
              <br />
                            {props.ppc}
                        </div>
                    </div>
                    <div className="main-6">
                        <FaCheckCircle
                            style={{
                                padding: "8px",
                                fontSize: "24px",
                                color: "#4054b2",
                            }}
                        />
                        <div>
                            Quality
              <br />
                            {props.quality}
                        </div>
                    </div>
                    <div className="main-6">
                        <FaCheckCircle
                            style={{
                                padding: "8px",
                                fontSize: "24px",
                                color: "#4054b2",
                            }}
                        />
                        <div>
                            Rate
              <br />
              Rs.{props.rate}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
const OrderCard = () => {
  return (
    <div>
      <div className="cardMain">
        {/* <div className="maintop">
          <div></div>
        </div> */}
        <div className="main-2">
          <img
            className="main-3"
            src="https://media.glassdoor.com/sqll/994701/raymond-squarelogo-1584958607938.png"
            alt="logo"
          />

          <div className="main-4">
            <div className="main-7">
              <div className="Raymondshawls">Raymond Shawls </div>
              <div>A9298989 </div>
              <div className="Orderdate"> Order Date: 30 / 09 / 2019 </div>
            </div>
          </div>
        </div>

        <div className="main-5">
          <div className="main-6">
            <FaCheckCircle
              style={{
                padding: "8px",
                fontSize: "24px",
                color: "#4054b2",
              }}
            />
            <div>
              GST
              <br />
              Rs.2000
            </div>
          </div>
          <div className="main-6">
            <FaCheckCircle
              style={{
                padding: "8px",
                fontSize: "24px",
                color: "#4054b2",
              }}
            />
            <div>
              PPC
              <br />
              30 ppc
            </div>
          </div>
          <div className="main-6">
            <FaCheckCircle
              style={{
                padding: "8px",
                fontSize: "24px",
                color: "#4054b2",
              }}
            />
            <div>
              Quantity
              <br />
              20 Pieces
            </div>
          </div>
          <div className="main-6">
            <FaCheckCircle
              style={{
                padding: "8px",
                fontSize: "24px",
                color: "#4054b2",
              }}
            />
            <div>
              Rate
              <br />
              Rs.3000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
