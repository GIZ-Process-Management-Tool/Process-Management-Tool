import React, { useState } from "react";
import axios from "axios";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "./../AppBar/Appbar";

function Winding() {
  var date = new Date();
  var curDate = date.toISOString().slice(0, 10);
  const [form, setForm] = useState({
    yarn_received: "",
    no_of_cones: "",
    size_of_cones: "",
    no_of_doffs: "",
    weight_of_cones: "",
    weight_of_waste: "",
    order_no: "",
    date: curDate,
    shift: "",
    package_defect: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3006/winding", form)
      .then((res) => {
        console.log(res);
        alert("successful insert");
      })
      .catch((err) => {
        console.log(err);
      });

    setForm({
      yarn_received: "",
      no_of_cones: "",
      size_of_cones: "",
      no_of_doffs: "",
      weight_of_cones: "",
      weight_of_waste: "",
      order_no: "",
      date: curDate,
      shift: "",
      package_defect: "",
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
        <div className="login">
          <Appbar processName="Winding" />
          <div className="form">
            <input
              type="number"
              vlaue={form.yarn_received}
              onChange={handleChange}
              name="yarn_received"
              placeholder="Yarn Received"
              required
            />
            <br />
            <input
              type="number"
              value={form.no_of_cones}
              onChange={handleChange}
              name="no_of_cones"
              placeholder="No of cones"
              required
            />
            <br />
            <input
              type="number"
              value={form.size_of_cones}
              onChange={handleChange}
              name="size_of_cones"
              placeholder="Size of Cones"
              required
            />
            <br />
            <input
              type="number"
              value={form.no_of_doffs}
              onChange={handleChange}
              name="no_of_doffs"
              placeholder="No of doffs"
              required
            />
            <br />
            <input
              type="number"
              value={form.weight_of_cones}
              onChange={handleChange}
              name="weight_of_cones"
              placeholder="Weight of cones"
              required
            />
            <br />
            <input
              type="number"
              value={form.weight_of_waste}
              onChange={handleChange}
              name="weight_of_waste"
              placeholder="Weight of Waste"
              required
            />
            <br />
            <input
              type="number"
              value={form.order_no}
              onChange={handleChange}
              name="order_no"
              placeholder="Order No"
              required
            />
            <br />
            <input
              type="number"
              value={form.shift}
              onChange={handleChange}
              name="shift"
              placeholder="Shift"
              required
            />
            <br />
            <input
              type="text"
              value={form.package_defect}
              onChange={handleChange}
              name="package_defect"
              placeholder="Package Defect"
              required
            />
            <br />
            <input type="submit" value="SUBMIT" className="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Winding;
