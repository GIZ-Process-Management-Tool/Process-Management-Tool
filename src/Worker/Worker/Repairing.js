import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function Repairing() {
  var date = new Date();
  var curDate = date.toISOString().slice(0, 10);
  const [data, setData] = useState([
  ]);


  const [form, setForm] = useState({
    order_no: "",
    date : curDate,
    machine: "",
    worker: "",

  });

  function handleSubmit(e) {

    e.preventDefault();

    axios.post("http://localhost:3006/repairing", form)
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
      machine: "",
      worker: "",

    });


  }

  useEffect((e) => {
    axios
      .get("http://localhost:3006/repairing")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleChange(event) {

    const { name, value } = event.target;

    setForm((prv) => {
      return {
        ...prv,
        [name]: value
      }
    });
  }

  function createSelectItems() {
    let items = [];
    for (let i = 0; i < data.length; i++) {
      items.push(
      <option key={data[i].order_no} value={data[i].order_no}>
        {data[i].order_no+" - "+data[i].company}
      </option>);
    }
    return items;
  }

  return (
<<<<<<< Updated upstream
    <form onSubmit={handleSubmit}>
      <div class="login">
        <div class="form">
          <NavLink to="/">
            <button>Back</button>
          </NavLink>
          <h2>Repairing Form</h2>

          <input type="number" value={form.order_no} onChange={handleChange} name="order_no" placeholder="Order Number" required />
          {/* <input type="date" value={form.date} onChange={handleChange} name="date" placeholder="Date" required /> */}
          <input type="number" value={form.machine} onChange={handleChange} name="machine" placeholder="Repairing Machine" required />
          <input type="text" value={form.worker} onChange={handleChange} name="worker" placeholder="Worker" required />
=======
    <div>
      <form onSubmit={handleSubmit}>
        <div class="login">
          <Appbar processName="Repairing Form" />
          <div class="form">
          <select 
            value={form.order_no}
            name="order_no"
            onChange={handleChange}
            placeholder="Order no.">
              {createSelectItems()}
            </select>
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
>>>>>>> Stashed changes

          <input type="submit" value="Sign In" class="submit" />
        </div>
      </div>
    </form>
  );
}
export default Repairing;