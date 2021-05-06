import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../Worker/Worker/InputFormStyle/formBGStyle.css";
// import Appbar from "../Worker/AppBar/Appbar";

function Looming() {
	const [data, setData] = useState([
    ]);
	const [form, setForm] = useState({
		id: "",
		start_date: "",
		end_date: "",
		loom: "",
		other_details: "",
	});


	useEffect((e) => {
		axios
		  .get("http://localhost:3006/loom_loading_chart")
		  .then((res) => {
			setData(res.data)
		  })
		  .catch((err) => {
			console.log(err);
		  });
	  }, []);


	function handleSubmit(e) {
		e.preventDefault();

		axios
			.post("http://localhost:3006/loom_loading_chart", form)
			.then((res) => {
				console.log(res);
				alert("successful insert");
			})
			.catch((err) => {
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
			{data[i].order_no+" - "+data[i].company}
		  </option>);
		}
		return items;
	  }


	return (
		<form onSubmit={handleSubmit}>
			<div class="login">
				<div class="form">
					<NavLink to="/service2">
						<button>Back</button>
					</NavLink>
					<h2>Loom Loading chart Form</h2>

					<select 
						value={form.order_no}
						name="id"
						onChange={handleChange}
						placeholder="Order no."
					>
						<option value="" disabled>Order no</option>
						{createSelectItems()}
              		</select>
					<input
						type="date"
						value={form.start_date}
						onChange={handleChange}
						name="start_date"
						placeholder="Start Date"
						required
					/>
					<input
						type="date"
						value={form.end_date}
						onChange={handleChange}
						name="end_date"
						placeholder="End Date"
						required
					/>
					<input
						type="number"
						value={form.loom}
						onChange={handleChange}
						name="loom"
						placeholder="Loom"
						required
					/>
					<input
						type="text"
						value={form.other_details}
						onChange={handleChange}
						name="other_details"
						placeholder="Other Details"
						required
					/>

					<input type="submit" value="SUBMIT" class="submit" />
				</div>
			</div>
		</form>
	);
}
export default Looming;
