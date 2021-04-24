import React from "react";
import Axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./InputFormStyle/formBGStyle.css";
import "./InputFormStyle/formElementStyle.css";

function Shift() {
  const [Date, setDate] = useState(0);
  const [TotalPicks, setTpicks] = useState(0);
  const [Loom, setLoom] = useState(0);

  const submitShiftData = () => {
    Axios.post("http://localhost:3006/shiftInsert", {
      Date: Date,
      TotalPicks: TotalPicks,
      Loom: Loom,
    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>Shift Form</h2>

        <input
          type="date"
          placeholder="Date"
          required
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        {/* <input type="number" placeholder="Order NO" required /> */}
        <input
          type="number"
          placeholder="Loom"
          required
          onChange={(e) => {
            setLoom(e.target.value);
          }}
        />
        {/* <input type="number" placeholder="Shift" required /> */}
        <input
          type="number"
          placeholder="Total Picks"
          required
          onChange={(e) => {
            setTpicks(e.target.value);
          }}
        />
        {/* <input type="number" placeholder="Meter" required /> */}
        <input
          type="submit"
          value="Sign In"
          class="submit"
          onClick={submitShiftData}
        />
      </div>
    </div>
  );
}
export default Shift;
