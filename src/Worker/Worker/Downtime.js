import React, { useState } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "./../AppBar/Appbar";

function DownTime() {
	var date = new Date();
	// date.getDate();
	var curDate = date.toISOString().slice(0, 10);
	const [form, setForm] = useState({
		date: curDate,
		loom: "",
		shift: "",
		weaver: "",
		downtime: "",
		remark: "",
	});

	function handleSubmit(e) {
		e.preventDefault();

		axios
			.post("http://localhost:3006/downtime", form)
			.then((res) => {
				console.log(res);
				alert("successful insert");
			})
			.catch((err) => {
				console.log(err);
			});

		setForm({
			date: curDate,
			loom: "",
			shift: "",
			weaver: "",
			downtime: "",
			remark: "",
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
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<div className="login">
						<Appbar processName="Downtime Form" />
						<div className="form">
							<input
								type="number"
								value={form.loom}
								onChange={handleChange}
								name="loom"
								placeholder="Loom"
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
								type="text"
								value={form.weaver}
								onChange={handleChange}
								name="weaver"
								placeholder="Weaver Name"
								required
							/>
							<input
								type="time"
								value={form.downtime}
								onChange={handleChange}
								name="downtime"
								placeholder="Downtime"
								required
							/>
							<input
								type="string"
								value={form.remark}
								onChange={handleChange}
								name="remark"
								placeholder="Remark"
								required
							/>
							<input type="submit" value="SUBMIT" className="submit" />
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
export default DownTime;
