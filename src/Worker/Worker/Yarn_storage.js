import React, { useState, useEffect } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "../AppBar/Appbar";
// import { RiContactsBookLine } from "react-icons/ri";

function YarnStorage() {
	var y_date = new Date();
	var curDate = y_date.toISOString().slice(0, 10);
	const [data, setData] = useState([]);

	const [received, setRecieved] = useState(0);
	const toggleReceived = (e) => {
		if (e.target.checked) setRecieved(1);
		else setRecieved(0);
	};

	const [complete, setComplete] = useState(false);
	const toggleComplete = (e) => {
		if (e.target.checked) setComplete(true);
		else setComplete(false);
	};

	const [form, setForm] = useState({
		weight: "",
		quality: "",
		order_no: "",
		date: curDate,
		shift: "",
	});

	useEffect((e) => {
		axios
			.get("http://localhost:3006/yarn")
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3006/yarn", { form: form, received: received })
			.then((res) => {
				console.log(res);
				alert("successful insert");
			})
			.catch((err) => {
				console.log(err);
			});
		if (complete) {
			axios.put("http://localhost:3006/yarn", form).then((res) => {
				console.log(res);
				alert("successful Update");
			});
		}
		console.log(form.order_no);
		setForm({
			weight: "",
			quality: "",
			order_no: "",
			y_date: curDate,
			shift: "",
		});
	};

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
					<Appbar processName="Yarn Storage Form" />
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
						<br />

						<div className="checkBox">
							<h3>Yarn Received:</h3>
							<input
								type="checkbox"
								checked={received}
								onChange={toggleReceived}
							/>
						</div>
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
							value={form.shift}
							onChange={handleChange}
							name="shift"
							placeholder="Shift"
							required
						/>
						<br />

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

export default YarnStorage;
