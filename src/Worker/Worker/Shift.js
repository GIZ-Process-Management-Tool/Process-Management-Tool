import React from "react";
import Axios from "axios";
import { useState } from "react";
import "./InputFormStyle/formBGStyle.css";
import "./../ErrorMessages/Error.css";
import Appbar from "./../AppBar/Appbar";

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
    <div>
      <div className="login">
        <Appbar processName="Shift Form" />
        <div className="form">
          <input
            type="date"
            placeholder="Date"
            required
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />

          <input
            type="number"
            placeholder="Loom"
            required
            onChange={(e) => {
              setLoom(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Total Picks"
            required
            onChange={(e) => {
              setTpicks(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Sign In"
            className="submit"
            onClick={submitShiftData}
          />
        </div>
      </div>
    </div>
  );
}
export default Shift;
