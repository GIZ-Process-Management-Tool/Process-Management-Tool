import React from "react";
import { NavLink } from "react-router-dom";
import "./Admin.css";
function Admin() {
  return (
    <div class="login">
      <div class="form">
        {/* <NavLink to="/">
          <button>Back</button>
        </NavLink> */}
        <NavLink to="/Worker">
          <button>Worker</button>
        </NavLink>
        <h2>Admin Login</h2>

        <input type="text" placeholder="enter Adminid" required />
        <input type="password" placeholder="enter password" required />

        <input type="submit" value="Sign In" class="submit" />
      </div>
    </div>
  );
}
export default Admin;
