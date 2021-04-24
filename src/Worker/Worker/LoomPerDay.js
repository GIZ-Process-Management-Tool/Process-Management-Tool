import React from "react";
import Axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";

function LoomperDay() {
  const [Date, setDate] = useState(0);
  const [sometCharges, setSometCharges] = useState(0);
  const [dornierCharges, setDornierCharges] = useState(0);

  console.log(Date, sometCharges, dornierCharges);

  const submitLoomCharges = () => {
    Axios.post("http://localhost:3006/loomperday/Insert", {
      Date: Date,
      sometCharges: sometCharges,
      dornierCharges: dornierCharges,
    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <div>
      <div class="login">
        <div class="form">
          <div className="upperButtons">
            <NavLink to="/worker1">
              <button class="button">Back</button>
            </NavLink>
            <a class="button" href="#popup1">
              Error
            </a>
          </div>
          <h2>LoomperDay Form</h2>
          <input
            type="Date"
            name=""
            placeholder="enter date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Somet Charges"
            required
            onChange={(e) => {
              setSometCharges(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Dorner Charges"
            required
            onChange={(e) => {
              setDornierCharges(e.target.value);
            }}
          />

          <input
            type="submit"
            value="Sign In"
            class="submit"
            onClick={submitLoomCharges}
          />
        </div>
      </div>
      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>Report Error</h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <input type="text" placeholder="error" />
            <button className="MainButton">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoomperDay;
