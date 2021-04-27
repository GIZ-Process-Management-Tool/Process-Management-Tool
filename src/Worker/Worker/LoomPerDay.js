import React from "react";
import Axios from "axios";
import { useState } from "react";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "./../AppBar/Appbar";

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
      <div className="login">
        <Appbar processName="LoomperDay Form" />
        <div className="form">
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
            className="submit"
            onClick={submitLoomCharges}
          />
        </div>
      </div>
    </div>
  );
}
export default LoomperDay;
