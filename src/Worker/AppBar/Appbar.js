import React from "react";
import "./../AppBar/Appbar.css";
import { BiCheck } from "react-icons/bi";
import { RiErrorWarningFill } from "react-icons/ri";
import "./../ErrorMessages/Error.css";
import brandLogo from "./../../Admin/pages/Sidebar/brandIcon.png";
const Appbar = ({ processName }) => {
  return (
    <>
      <div className="Appbar-main">
        <div className="appBarHeader">
          <img
            className="brandIconStyle"
            src={brandLogo}
            alt="Vatan Textiles"
          />

          <h4 style={{ fontSize: "20px", color: "#ffff", fontStyle: "bold" }}>
            {processName}
          </h4>
        </div>
        <div className="firstIcon">
          <BiCheck
            style={{ fontSize: "44px", color: "#ffff", fontStyle: "bold" }}
          />
        </div>
        <div className="ErrorIcon">
          <a class="button" href="#popup1">
            <RiErrorWarningFill
              style={{ fontSize: "32px", color: "#ffff", fontStyle: "bold" }}
            />
          </a>
          <div id="popup1" className="overlay">
            <div className="popup">
              <h2>Report Error</h2>
              <a className="close" href="#">
                &times;
              </a>
              <div className="content">
                <textarea type="text" placeholder="error" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Appbar;
