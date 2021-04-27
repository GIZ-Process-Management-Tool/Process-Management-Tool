import React from "react";
import "./Newcard.css";
import { FaCheckCircle } from "react-icons/fa";

const Card1 = () => {
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

export default Card1;
