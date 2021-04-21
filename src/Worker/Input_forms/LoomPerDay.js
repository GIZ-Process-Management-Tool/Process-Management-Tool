import React from "react";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function LoomperDay() {
  return (
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>LoomperDay Form</h2>

        <input type="number" placeholder="Somet Charges" required />
        <input type="number" placeholder="Dorner Charges" required />

        <input type="submit" value="Sign In" class="submit" />
      </div>
    </div>
  );
}
export default LoomperDay;
