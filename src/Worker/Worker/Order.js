/*Order Form in React js*/
import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
import "./../ErrorMessages/Error.css";

function Order() {
  const [form, setForm] = useState({
    order_no: "",
    date: "",
    company: "",
    gst: "",
    quality: "",
    ppc: "",
    rate: "",
    deadline: "",
    target: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3006/order", form)
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
      company: "",
      gst: "",
      quality: "",
      ppc: "",
      rate: "",
      deadline: "",
      target: "",
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
            <h2>Order Form</h2>
            <input
              type="Number"
              value={form.order_no}
              onChange={handleChange}
              name="order_no"
              placeholder="Order NO"
              required
            />
            <input
              type="date"
              value={form.date}
              onChange={handleChange}
              name="date"
              placeholder="date"
              required
            />
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              required
            />
            <input
              type="text"
              name="gst"
              value={form.gst}
              onChange={handleChange}
              placeholder="GST"
              required
            />
            <input
              type="text"
              name="quality"
              value={form.quality}
              onChange={handleChange}
              placeholder="Quality"
              required
            />
            <input
              type="number"
              name="ppc"
              value={form.ppc}
              onChange={handleChange}
              placeholder="PPC"
              required
            />
            <input
              type="number"
              name="rate"
              value={form.rate}
              onChange={handleChange}
              placeholder="Rate"
              required
            />
            <input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              placeholder="Deadline"
              required
            />
            <input
              type="number"
              name="target"
              value={form.target}
              onChange={handleChange}
              placeholder="Target"
              required
            />
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
            <input type="submit" value="SUBMIT" class="submit" />
          </div>
        </div>
      </form>
      {/* <div id="popup1" class="overlay">
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
      </div> */}
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
export default Order;
