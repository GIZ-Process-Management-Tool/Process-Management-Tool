import React from "react";
import { NavLink } from "react-router-dom";
import "./Loomloadingchart.css";
function GreyReport() {
  return (
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>GreyReport Form</h2>

        <input type="date" placeholder="Date" required />
        <input type="number" placeholder="Shift" required />
        <input type="number" placeholder="Loom" required />
        <input type="text" placeholder="Worker" required />
        <input type="number" placeholder="Meters" required />
        <input type="number" placeholder="points" required />
        <input type="number" placeholder="Reoairing Id" required />
        <input type="submit" value="Sign In" class="submit" />
      </div>
    </div>
  );
}
export default GreyReport;
