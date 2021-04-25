import React from "react";
import Axios from 'axios';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function Shift() {
  var date = new Date();
  let dt = date.toISOString().slice(0, 10);
  const [s_date, curDate] = useState(dt);
  const [total_picks, setTpicks] = useState(0);
  const [loom_no, setLoom] = useState(0);

  const submitShiftData = () => {
    let dt1 = date.toISOString().slice(0, 10);
    curDate(dt1);
    // console.log(dt1)
    Axios.post('http://localhost:3006/shiftInsert', {
      s_date: s_date,
      total_picks: total_picks,
      loom_no: loom_no
    }).then(() => {
      alert("successful insert");
    })
  };

  return (
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>Shift Form</h2>

        {/* <input type="date" placeholder="Date" required
          onChange={(e) => {
            setDate(e.target.value);
          }} /> */}
        {/* <input type="number" placeholder="Order NO" required /> */}
        <input type="number" placeholder="Loom" required
          onChange={(e) => {
            setLoom(e.target.value);
          }} />
        {/* <input type="number" placeholder="Shift" required /> */}
        <input type="number" placeholder="Total Picks" required
          onChange={(e) => {
            setTpicks(e.target.value);
          }} />
        {/* <input type="number" placeholder="Meter" required /> */}
        <input type="submit" value="Sign In" class="submit" onClick={submitShiftData} />
      </div>
    </div>
  );
}
export default Shift;
