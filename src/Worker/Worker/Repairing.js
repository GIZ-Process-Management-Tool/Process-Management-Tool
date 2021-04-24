import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./InputFormStyle/formBGStyle.css";
import "./InputFormStyle/formElementStyle.css";

function Repairing() {
  const [form, setForm] = useState({
    order_no: "",
    date: "",
    machine: "",
    worker: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3006/repairing", form)
      .then((res) => {
        console.log(res);
        alert("successful insert");
      })
      .catch((err) => {
        console.log(err);
      });

    setForm({
      order_no: "",
      date: "",
      machine: "",
      worker: "",
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
          <h2>Repairing Form</h2>

          <input
            type="number"
            value={form.order_no}
            onChange={handleChange}
            name="order_no"
            placeholder="Order Number"
            required
          />
          <input
            type="date"
            value={form.date}
            onChange={handleChange}
            name="date"
            placeholder="Date"
            required
          />
          <input
            type="number"
            value={form.machine}
            onChange={handleChange}
            name="machine"
            placeholder="Repairing Machine"
            required
          />
          <input
            type="text"
            value={form.worker}
            onChange={handleChange}
            name="worker"
            placeholder="Worker"
            required
          />

          <input type="submit" value="Sign In" class="submit" />
        </div>
      </div>
    </form>
  );
}
export default Repairing;
