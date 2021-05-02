import React, { useState } from "react";
import axios from "axios";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "./../AppBar/Appbar";

function YarnStorage() {
	var date = new Date();
	var curDate = date.toISOString().slice(0, 10);
	const [form, setForm] = useState({
		yarn_received: "",
		weight: "",
		quality: "",
		order_no: "",
		date: curDate,
		shift: "",
	});

	function handleSubmit(e) {
		e.preventDefault();

		axios
			.post("http://localhost:3006/yarn", form)
			.then((res) => {
				console.log(res);
				alert("successful insert");
			})
			.catch((err) => {
				console.log(err);
			});
		axios
			.put("http://localhost:3006/yarn", form)
			.then((res) => {
				console.log(res);
				alert("successful Update");
			})

			.catch((err) => {
				console.log(err);
			});
		setForm({
			yarn_received: "",
			weight: "",
			quality: "",
			order_no: "",
			date: curDate,
			shift: "",
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
					<Appbar processName="Yarn Storage Form" />
					<div class="form">
						<input
							type="number"
							value={form.yarn_received}
							onChange={handleChange}
							name="yarn_received"
							placeholder="Yarn Received"
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
						<input
							type="text"
							value={form.quality}
							onChange={handleChange}
							name="quality"
							placeholder="Quality"
							required
						/>
						<br />
						<input
							type="number"
							value={form.order_no}
							onChange={handleChange}
							name="order_no"
							placeholder="Order Number"
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
						<input type="submit" value="SUBMIT" className="submit" />
					</div>
				</div>
			</form>
		</div>
	);
}

export default YarnStorage;
