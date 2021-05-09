import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "../AppBar/Appbar";

function Target() {
  const [form, setForm] = useState({
    s_date: "",
    shift: "",
    target: "",
    supervisor: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3006/target", form)
      .then((res) => {
        console.log(res);
        alert("successful insert");
      })
      .catch((err) => {
        console.log(err);
      });

    setForm({
      s_date: "",
      shift: "",
      target: "",
      supervisor: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prv) => {
      return {
        ...prv,
        [name]: value,
      };
    });
  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <div class="login">
          <Appbar processName="Target" />
          <div class="form">
            <input
              type="date"
              value={form.s_date}
              onChange={handleChange}
              name="s_date"
              placeholder="Date"
              required
            />
            <input
              type="number"
              value={form.shift}
              onChange={handleChange}
              name="shift"
              placeholder="Shift"
              required
            />
            <input
              type="number"
              value={form.target}
              onChange={handleChange}
              name="target"
              placeholder="Target for all looms"
              required
            />
            <input
              type="text"
              value={form.supervisor}
              onChange={handleChange}
              name="supervisor"
              placeholder="Supervisor"
              required
            />
            <input type="submit" value="SUBMIT" className="submit" />
            <br />
            {/* <input type="submit" value="Calculate Loom analysis" className="submit"/>
                <br/>
              <input type="submit" value="Calculate WTTI" className="submit"/> */}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Target;
