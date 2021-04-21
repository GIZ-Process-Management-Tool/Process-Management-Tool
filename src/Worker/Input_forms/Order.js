/*Order Form in React js*/
import React from "react";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function Order() {
  return (
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>Order Form</h2>
        <input type="Number" placeholder="Order NO" required />
        <input type="date" placeholder="date" required />
        <input type="text" placeholder="Company Name" required />
        <input type="number" placeholder="GST" required />
        <input type="text" placeholder="Company" required />
        <input type="number" placeholder="PPC" required />
        <input type="number" placeholder="Rate" required />
        <input type="date" placeholder="Deadline" required />
        <input type="number" placeholder="Target" required />
        <div className="checkBox">
          <h3>Yarn Inverting:</h3>
          <input type="checkbox" />
        </div>
        <div className="checkBox">
          <h3>Warping proc:</h3>
          <input type="checkbox" />
        </div>
        <div className="checkBox">
          <h3>Creel proc :</h3>
          <input type="checkbox" />
        </div>

        <input type="submit" value="Sign In" class="submit" />
      </div>
    </div>
  );
}
export default Order;
