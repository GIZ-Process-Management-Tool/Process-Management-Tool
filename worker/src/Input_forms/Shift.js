import React from "react";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function Shift() {
  return (
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>Shift Form</h2>

        <input type="date" placeholder="Date" required />
        <input type="number" placeholder="Order NO" required />
        <input type="number" placeholder="Loom" required />
        <input type="number" placeholder="Shift" required />
        <input type="number" placeholder="Total Picks" required />
        <input type="number" placeholder="Meter" required />
        <input type="submit" value="Sign In" class="submit" />
      </div>
    </div>
  );
}
export default Shift;
