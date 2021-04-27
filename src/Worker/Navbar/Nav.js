import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
const Nav = ({ processName }) => {
  return (
    <>
      <div className="Nav-main">
        <ul>
          <li>
            <NavLink className="active" to="/">
              Service1
            </NavLink>
          </li>
          <li>
            <NavLink className="active" to="/service2">
              Service2
            </NavLink>
          </li>
          <li>
            <NavLink className="active" to="/service3">
              Service3
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Nav;
