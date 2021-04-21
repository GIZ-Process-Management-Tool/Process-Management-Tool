import React from "react";
import { NavLink } from "react-router-dom";
import "./Admin.css";
function Worker() {
  return (
    <div class="login">
      <div class="form">
        <NavLink to="/admin">
          <button>Back</button>
        </NavLink>
        <h2>Worker Login</h2>

        <input type="text" placeholder="Worker id" required />
        <input type="password" placeholder="enter password" required />

        <input type="submit" value="log In" class="submit" />
      </div>
    </div>
  );
}
export default Worker;
