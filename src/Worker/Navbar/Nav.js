import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="Nav-main">
        <ul>
          <li>
            <NavLink class="active" to="/">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink class="active" to="/service2">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink class="active" to="/service2">
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink class="active" to="/service2">
              Service4
            </NavLink>
          </li>
          <li>
            <NavLink class="active" to="/service2">
              Service5
            </NavLink>
          </li>
          <li>
            <NavLink class="active" to="/service2">
              Service6
            </NavLink>
            <li>
              <NavLink class="active" to="/service2">
                Service7
              </NavLink> 
            </li>
          </li>*/}
        </ul>
      </div>
    </>
  );
};
export default Nav;
