import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "./../AppBar/Appbar";

function Repairing() {
	var date = new Date();
	var curDate = date.toISOString().slice(0, 10);
	const [form, setForm] = useState({
		order_no: "",
		date: curDate,
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
			.put("http://localhost:3006/repairing", form)
			.then((res) => {
				console.log(res);
				alert("successful Update");
			})
			.catch((err) => {
				console.log(err);
			});

		setForm({
			order_no: "",
			date: curDate,
			machine: "",
			worker: "",
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
				<div class="login">
					<Appbar processName="Repairing Form" />
					<div class="form">
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

						<input type="submit" value="Sign In" class="submit" />
					</div>
				</div>
			</form>
		</div>
	);
}
export default Repairing;
