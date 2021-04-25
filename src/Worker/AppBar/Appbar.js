import React from "react";
import "./../AppBar/Appbar.css";
import { NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { RiErrorWarningFill } from "react-icons/ri";
import "./../ErrorMessages/Error.css";
import brandLogo from "./../../Admin/pages/Sidebar/brandIcon.png";
const Appbar = ({ processName }) => {
  return (
    <>
      <div className="Appbar-main">
        <div className="firstIcon">
          <img src={brandLogo} alt="Vatan Textiles" />
        </div>

        <div className="firstText">
          <h4 style={{ fontSize: "24px", color: "#ffff", fontStyle: "bold" }}>
            {processName}
          </h4>
        </div>
        <div className="firstIcon">
          <BiCheck
            style={{ fontSize: "44px", color: "#ffff", fontStyle: "bold" }}
          />
        </div>
        <div className="firstIcon">
          <a class="button" href="#popup1">
            <RiErrorWarningFill
              style={{ fontSize: "44px", color: "#ffff", fontStyle: "bold" }}
            />
          </a>
          <div id="popup1" class="overlay">
            <div class="popup">
              <h2>Report Error</h2>
              <a class="close" href="#">
                &times;
              </a>
              <div class="content">
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
