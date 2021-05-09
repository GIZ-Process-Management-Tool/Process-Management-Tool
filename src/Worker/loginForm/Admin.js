import React from "react";
import { NavLink } from "react-router-dom";
import "../Worker/InputFormStyle/formBGStyle.css";
function Admin() {
  return (
    <div className="login">
      <div className="form">
        {/* <NavLink to="/">
          <button>Back</button>
        </NavLink> */}
        <NavLink to="/Worker">
          <button>Worker</button>
        </NavLink>
        <h2>Admin Login</h2>

        <input type="text" placeholder="enter Adminid" required />
        <input type="password" placeholder="enter password" required />

        <input type="submit" value="Sign In" className="submit" />
      </div>
    </div>
  );
}
export default Admin;
