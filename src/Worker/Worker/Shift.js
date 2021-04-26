import React from "react";
import Axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./InputFormStyle/formBGStyle.css";
import "./../ErrorMessages/Error.css";
import Appbar from "./../AppBar/Appbar";

function Shift() {
	var date = new Date();
	let dt = date.toISOString().slice(0, 10);
	const [s_date, curDate] = useState(dt);
	const [total_picks, setTpicks] = useState(0);
	const [loom_no, setLoom] = useState(0);

	const submitShiftData = () => {
		let dt1 = date.toISOString().slice(0, 10);
		curDate(dt1);
		Axios.post("http://localhost:3006/shiftInsert", {
			s_date: s_date,
			total_picks: total_picks,
			loom_no: loom_no,
		}).then(() => {
			alert("successful insert");
		});
	};

	return (
		<div>
			<div class="login">
				<Appbar processName="Shift Form" />
				<div class="form">
					<input
						type="number"
						placeholder="Loom"
						required
						onChange={(e) => {
							setLoom(e.target.value);
						}}
					/>
					<input
						type="number"
						placeholder="Total Picks"
						required
						onChange={(e) => {
							setTpicks(e.target.value);
						}}
					/>
					<input
						type="submit"
						value="Sign In"
						class="submit"
						onClick={submitShiftData}
					/>
				</div>
			</div>
		</div>
	);
}
export default Shift;
