import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";

function Yarn() {
  const [form, setForm] = useState({
    order_no: "",
    length: "",
    weight: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3006/packing", form)
      .then((res) => {
        console.log(res);
        alert("successful insert");
      })
      .catch((err) => {
        console.log(err);
      });

    setForm({
      order_no: "",
      length: "",
      weight: "",
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
            <h2>Packing Form</h2>

            <input
              type="number"
              vlaue={form.order_no}
              onChange={handleChange}
              name="order_no"
              placeholder="Order Number"
              required
            />
            <br />
            <input
              type="number"
              value={form.length}
              onChange={handleChange}
              name="length"
              placeholder="Length"
              required
            />
            <br />
            <input
              type="number"
              value={form.weight}
              onChange={handleChange}
              name="weight"
              placeholder="Weight"
              required
            />
            <br />
            <input type="submit" value="SUBMIT" class="submit" />
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
export default Yarn;
