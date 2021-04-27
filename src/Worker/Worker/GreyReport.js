import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "./../AppBar/Appbar";

function GreyReport() {
  var date = new Date();
  var curDate = date.toISOString().slice(0, 10);

  const [data, setData] = useState([
  ]);

  const [form, setForm] = useState({
    date: curDate,
    shift: "",
    loom_no: "",
    worker: "",
    meters: "",
    points: "",
    order_no: "",
  });

  const [loom_no, setLoom] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3006/grey_report", form)
      .then((res) => {
        console.log(res);
        alert("successful insert");
      })
      .catch((err) => {
        console.log(err);
      });

    setForm({
      date: curDate,
      shift: "",
      loom_no: "",
      worker: "",
      meters: "",
      points: "",
      repairable: "",
      order_no: "",
      grade: "",
    });
  }

  useEffect((e) => {
    axios
      .get("http://localhost:3006/grey_report")
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
        [name]: value,
      };
    });
  }

  const handleLoomNo = (e) => {
    setLoom(e.target.value);
  };

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
    <div>
      <form onSubmit={handleSubmit}>
        <div class="login">
          <Appbar processName="GreyReport Form" />
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
              value={form.shift}
              onChange={handleChange}
              name="shift"
              placeholder="Shift"
              required
            />
         <select
          value={form.loom}
          onChange={handleChange}
          name="loom_no"
        >
          <option value="1">Loom-1</option>
          <option value="2">Loom-2</option>
          <option value="3">Loom-3</option>
          <option value="4">Loom-4</option>
          <option value="5">Loom-5</option>
          <option value="6">Loom-6</option>
          <option value="7">Loom-7</option>
          <option value="8">Loom-8</option>
          <option value="9">Loom-9</option>
          <option value="10">Loom-10</option>
          {handleLoomNo}
        </select>
            <input
              type="text"
              value={form.worker}
              onChange={handleChange}
              name="worker"
              placeholder="Worker"
              required
            />
            <input
              type="number"
              value={form.meters}
              onChange={handleChange}
              name="meters"
              placeholder="Meters"
              required
            />
            <input
              type="number"
              value={form.points}
              onChange={handleChange}
              name="points"
              placeholder="points"
              required
            />
        <div className="checkBox">
            <h3>Repairable:</h3>
            <input
              type="checkbox"
						/>
        </div>
            <input
              type="text"
              value={form.grade}
              onChange={handleChange}
              name="grade"
              placeholder="Grade"
              required
            />
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
            value={form.shift}
            onChange={handleChange}
            name="shift"
            placeholder="Shift"
            required
          />
          <input
            type="number"
            value={form.loom_no}
            onChange={handleChange}
            name="loom_no"
            placeholder="Loom"
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
          <input
            type="number"
            value={form.meters}
            onChange={handleChange}
            name="meters"
            placeholder="Meters"
            required
          />
          <input
            type="number"
            value={form.points}
            onChange={handleChange}
            name="points"
            placeholder="points"
            required
          />
          <input
            type="number"
            value={form.order_no}
            onChange={handleChange}
            name="order_no"
            placeholder="Order Number"
            required
          />
          <input
            type="number"
            value={form.repairable}
            onChange={handleChange}
            name="repairable"
            placeholder="Repairable"
            required
          />
          <input
            type="number"
            value={form.grade}
            onChange={handleChange}
            name="grade"
            placeholder="Grade"
            required
          />
          <input type="submit" value="SUBMIT" class="submit" />
        </div>
      </div>
    </div>
  );
}
export default GreyReport;
