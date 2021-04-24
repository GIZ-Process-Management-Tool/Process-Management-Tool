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
              Service1
            </NavLink>
          </li>
          <li>
            <NavLink class="active" to="/service2">
              Service2
            </NavLink>
          </li>
          <li>
            <NavLink class="active" to="/service3">
              Service3
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
