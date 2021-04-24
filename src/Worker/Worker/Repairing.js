import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./Demo2.css";
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
    <div>
      <form onSubmit={handleSubmit}>
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
export default Repairing;
