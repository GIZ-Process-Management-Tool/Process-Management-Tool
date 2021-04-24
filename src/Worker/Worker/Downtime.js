import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./InputFormStyle/formBGStyle.css";

function DownTime() {
  const [form, setForm] = useState({
    date: "",
    loom: "",
    shift: "",
    weaver: "",
    downtime: "",
    remark: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3006/downtime", form)
      .then((res) => {
        console.log(res);
        alert("successful insert");
      })
      .catch((err) => {
        console.log(err);
      });

    setForm({
      date: "",
      loom: "",
      shift: "",
      weaver: "",
      downtime: "",
      remark: "",
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
    <form onSubmit={handleSubmit}>
      <div class="login">
        <div class="form">
          <NavLink to="/">
            <button>Back</button>
          </NavLink>
          <h2>Downtime Form</h2>

          <input
            type="date"
            vlaue={form.date}
            onChange={handleChange}
            name="date"
            placeholder="Date"
            required
          />
          <input
            type="number"
            value={form.loom}
            onChange={handleChange}
            name="loom"
            placeholder="Loom"
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
            type="text"
            value={form.weaver}
            onChange={handleChange}
            name="weaver"
            placeholder="Weaver Name"
            required
          />
          <input
            type="time"
            value={form.downtime}
            onChange={handleChange}
            name="downtime"
            placeholder="Downtime"
            required
          />
          <input
            type="string"
            value={form.remark}
            onChange={handleChange}
            name="remark"
            placeholder="Remark"
            required
          />
          <input type="submit" value="SUBMIT" class="submit" />
        </div>
      </div>
    </form>
  );
}
export default DownTime;
