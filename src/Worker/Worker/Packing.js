import React, { useState, useEffect } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "./../AppBar/Appbar";
export default function Yarn() {
  // --------------Automatic date------------------
  // var date = new Date();
  // var curDate = date.toISOString().slice(0, 10);

  const [form, setForm] = useState({
    // --------------Automatic date------------------
    // date: curDate,
    order_no: "",
    length: "",
    weight: "",
    date: "",
  });

  const [complete, setComplete] = useState(false);
  const toggleComplete = (e) => {
    if (e.target.checked) setComplete(true);
    else setComplete(false);
  };

  const [data, setData] = useState([]);

  useEffect((e) => {
    axios
      .get("http://localhost:3006/packing")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

    if (complete) {
      axios
        .patch("http://localhost:3006/status3", form)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setForm({
      // --------------Automatic date------------------
      // date: curDate,
      order_no: "",
      length: "",
      weight: "",
      date: "",
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

  function createSelectItems() {
    let items = [];
    for (let i = 0; i < data.length; i++) {
      items.push(
        <option key={data[i].order_no} value={data[i].order_no}>
          {data[i].order_no + " - " + data[i].company}
        </option>
      );
    }
    return items;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <Appbar processName="Packing Form" />
          <div class="form">
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
              value={form.length}
              onChange={handleChange}
              name="length"
              placeholder="Length"
              required
            />
            <input
              type="number"
              value={form.weight}
              onChange={handleChange}
              name="weight"
              placeholder="Weight"
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
