import React, { useState } from "react";
import axios from "axios";
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
    <form onSubmit={handleSubmit}>
      <div class="login">
        <div class="form">
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
  );
}
export default Yarn;
