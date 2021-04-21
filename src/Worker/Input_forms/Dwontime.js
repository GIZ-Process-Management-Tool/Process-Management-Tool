import React from "react";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function DownTime() {
  return (
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>Downtime Form</h2>

        <input type="number" placeholder="Date" required />
        <input type="number" placeholder="Loom" required />
        <input type="number" placeholder="Shift" required />
        <input type="text" placeholder="Weaver Name" required />
        <input type="time" placeholder="Downtime" required />
        <input type="string" placeholder="Remark" required />
        <input type="submit" value="Sign In" class="submit" />
      </div>
    </div>
  );
}
export default DownTime;
