import React from "react";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function Repairing() {
  return (
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>Repairing Form</h2>

        <input type="number" placeholder="Repairing ID" required />
        <input type="date" placeholder="Date" required />
        <input type="number" placeholder="Repairing Machine" required />
        <input type="text" placeholder="Worker" required />

        <input type="submit" value="Sign In" class="submit" />
      </div>
    </div>
  );
}
export default Repairing;
