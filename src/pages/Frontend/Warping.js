/*Order Form in React js*/
import React, { useState } from "react";
import axios from "axios";

// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Demo2.css";
function Warping() {
  const [form, setForm] = useState({
    order_no: "",
    date: "",
    shift: "",
    weight_o_w_y: "",
    waste_weight: "",
    package_defect: ""

  });

  function handleSubmit(e) {

    e.preventDefault();

    axios.post("http://localhost:5000/warping", form)
      .then(res => {
        console.log(res);
        alert("successful insert");
      })
      .catch(err => {
        console.log(err);
      });

    setForm({
      order_no: "",
      date: "",
      shift: "",
      weight_o_w_y: "",
      waste_weight: "",
      package_defect: ""

    });


  }

  function handleChange(event) {

    const { name, value } = event.target;

    setForm((prv) => {
      return {
        ...prv,
        [name]: value
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div class="login">
        <div class="form">

          <h2>Warping Form</h2>
          <input type="number" value={form.order_no} onChange={handleChange} name="order_no" placeholder="Order NO" required />
          <br />
          <input type="date" value={form.date} onChange={handleChange} name="date" placeholder="date" required />
          <br />
          <input type="number" name="shift" value={form.shift} onChange={handleChange} placeholder="Shift" required />
          <br />
          <input type="number" name="weight_o_w_y" value={form.weight_o_w_y} onChange={handleChange} placeholder="Weight of Waste Yarn" required />
          <br />
          <input type="number" name="waste_weight" value={form.waste_weight} onChange={handleChange} placeholder="Waste Weight" required />
          <br />
          <input type="text" name="package_defect" value={form.package_defect} onChange={handleChange} placeholder="Package Pefect" required />
          <br />
          <input type="submit" value="SUBMIT" class="submit" />
        </div>
      </div>
    </form>
  );
}
export default Warping;
