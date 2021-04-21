import React from "react";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function Looming() {
  return (
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>LoomLoadingchart Form</h2>

        <input type="Number" placeholder="Order NO" required />
        <input type="date" placeholder="Start Date" required />
        <input type="date" placeholder="End Date" required />
        <input type="number" placeholder="Loom" required />
        <input type="text" placeholder="Other Details" required />

        <input type="submit" value="Sign In" class="submit" />
      </div>
    </div>
  );
}
export default Looming;
