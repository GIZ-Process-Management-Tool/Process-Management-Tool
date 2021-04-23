import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function Looming() {
  const [form, setForm] = useState({
    id: "",
    start_date: "",
    end_date: "",
    loom: "",
    other_details: ""

});

function handleSubmit(e) {

    e.preventDefault();

    axios.post("http://localhost:3006/loom_loading_chart", form)
        .then(res => {
            console.log(res);
            alert("successful insert");
        })
        .catch(err => {
            console.log(err);
        });

    setForm({
      id: "",
      start_date: "",
      end_date: "",
      loom: "",
      other_details: "",

    });
  }
  function handleChange(event) {

    const {name, value} = event.target;

    setForm((prv) => {
        return{
            ...prv,
            [name]: value
        }
    });
}
  return (
    <form onSubmit={handleSubmit}>
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>Loom Loading chart Form</h2>

        <input type="Number" value={form.id} onChange = {handleChange} name="id" placeholder="Order NO" required />
        <input type="date" value={form.start_date} onChange = {handleChange} name="start_date" placeholder="Start Date" required />
        <input type="date" value={form.end_date} onChange = {handleChange} name="end_date" placeholder="End Date" required />
        <input type="number" value={form.loom} onChange = {handleChange} name="loom" placeholder="Loom" required />
        <input type="text" value={form.other_details} onChange = {handleChange} name="other_details" placeholder="Other Details" required />

        <input type="submit" value="SUBMIT" class="submit" />
      </div>
    </div>
    </form>
  );
}
export default Looming;