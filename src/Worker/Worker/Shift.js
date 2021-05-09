import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import "./InputFormStyle/formBGStyle.css";
import "./../ErrorMessages/Error.css";
import Appbar from "../AppBar/Appbar";
function Shift() {
  // -------------------Automatic date---------------------------
  // var date = new Date();
  // var curDate = date.toISOString().slice(0, 10);

  const [data, setData] = useState([]);

  const [received, setReceieved] = useState(0);
  console.log(received);
  const toggleReceived = (e) => {
    if (e.target.checked) setReceieved(1);
    else setReceieved(0);
  };

  const [complete, setComplete] = useState(false);
  const toggleComplete = (e) => {
    if (e.target.checked) setComplete(true);
    else setComplete(false);
  };

  const [form, setForm] = useState({
    // -------------------Automatic date---------------------------
    // s_date: curDate,
    s_date: "",
    warped_yarn_received: "",
    order_no: "",
    loom_no: "",
    shift: "",
    total_picks: "",
    waste_weight: "",
  });

  const [loom_no, setLoom] = useState();

  useEffect((e) => {
    Axios.get("http://localhost:3006/shiftInsert")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    Axios.post("http://localhost:3006/shiftInsert", {
      form: form,
      received: received,
    })
      .then((res) => {
        console.log(res);
        alert("successful insert");
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.patch("http://localhost:3006/status", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    if (complete) {
      Axios.put("http://localhost:3006/shiftInsert", form).then(() => {
        alert("successful Update");
      });
    }

    setForm({
      // -------------------Automatic date---------------------------
      // s_date: curDate,
      s_date: "",
      warped_yarn_received: "",
      order_no: "",
      loom_no: "",
      shift: "",
      total_picks: "",
      waste_weight: "",
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

  const handleLoomNo = (e) => {
    setLoom(e.target.value);
  };

  function createSelectItems() {
    console.log(data);
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
        <div class="login">
          <Appbar processName="Shift Form" />
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
            <select value={form.loom_no} onChange={handleChange} name="loom_no">
              <option value="" disabled>
                Select loom
              </option>
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
            <div className="checkBox">
              <h3>Warped Yarn Received:</h3>
              <input
                type="checkbox"
                checked={received}
                onChange={toggleReceived}
              />
            </div>
            <input
              type="date"
              value={form.s_date}
              onChange={handleChange}
              name="s_date"
              placeholder="Date"
              required
            />
            <input
              type="number"
              placeholder="Shift"
              value={form.shift}
              onChange={handleChange}
              name="shift"
              required
            />
            <input
              type="number"
              placeholder="Total Picks"
              value={form.total_picks}
              onChange={handleChange}
              name="total_picks"
              required
            />
            <input
              type="number"
              placeholder="Waste Weight"
              value={form.waste_weight}
              onChange={handleChange}
              name="waste_weight"
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
            <input type="submit" value="SUBMIT" class="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Shift;
