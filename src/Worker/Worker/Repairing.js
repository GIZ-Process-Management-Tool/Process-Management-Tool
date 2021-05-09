import React, { useState, useEffect } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "./../AppBar/Appbar";

function Repairing() {
  // -------------------Automatic date-----------------------
  // var date = new Date();
  // var curDate = date.toISOString().slice(0, 10);
  const [data, setData] = useState([]);

  const [complete, setComplete] = useState(false);
  const toggleComplete = (e) => {
    if (e.target.checked) setComplete(true);
    else setComplete(false);
  };

  const [form, setForm] = useState({
    order_no: "",
    date: "",
    // -------------------Automatic date-----------------------
    // date : curDate,
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
    axios
      .patch("http://localhost:3006/status", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    if (complete) {
      axios
        .put("http://localhost:3006/repairing", form)
        .then((res) => {
          console.log(res);
          alert("successful Update");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  useEffect((e) => {
    axios
      .get("http://localhost:3006/repairing")
      .then((res) => {
        setData(res.data);
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
  function createSelectItems() {
    let items = [];
    for (let i = 0; i < data.length; i++) {
      items.push(
        <option key={data[i].orderNo} value={data[i].orderNo}>
          {data[i].orderNo + " - " + data[i].company}
        </option>
      );
    }
    return items;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <Appbar processName="Repairing Form" />
          <div className="form">
            <select
              value={form.order_no}
              name="order_no"
              onChange={handleChange}
              placeholder="Order no."
            >
              <option value="" disabled>
                Order no
              </option>
              {createSelectItems()}
            </select>
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
            <div className="checkBox">
              <h3>Done with all lots !</h3>
              <input
                type="checkbox"
                checked={complete}
                onChange={toggleComplete}
              />
            </div>
            <input type="submit" value="SUBMIT" className="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Repairing;
