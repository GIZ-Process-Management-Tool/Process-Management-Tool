/*Order Form in React js*/
import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";

import "./InputFormStyle/formBGStyle.css";

function Warping() {
	const [form, setForm] = useState({
		order_no: "",
		date: "",
		shift: "",
		weight_o_w_y: "",
		waste_weight: "",
		package_defect: "",
	});

	function handleSubmit(e) {
		e.preventDefault();

		axios
			.post("http://localhost:3006/warping", form)
			.then((res) => {
				console.log(res);
				alert("successful insert");
			})
			.catch((err) => {
				console.log(err);
			});

		setForm({
			order_no: "",
			date: "",
			shift: "",
			weight_o_w_y: "",
			waste_weight: "",
			package_defect: "",
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
					<div class="form">
						<div className="upperButtons">
							<NavLink to="/worker1">
								<button class="button">Back</button>
							</NavLink>
							<button class="button">Complete</button>
							<a class="button" href="#popup1">
								Error
							</a>
						</div>

						<h2>Warping Form</h2>
						<input
							type="number"
							value={form.order_no}
							onChange={handleChange}
							name="order_no"
							placeholder="Order NO"
							required
						/>
						<br />
						<input
							type="date"
							value={form.date}
							onChange={handleChange}
							name="date"
							placeholder="date"
							required
						/>
						<br />
						<input
							type="number"
							name="shift"
							value={form.shift}
							onChange={handleChange}
							placeholder="Shift"
							required
						/>
						<br />
						<input
							type="number"
							name="weight_o_w_y"
							value={form.weight_o_w_y}
							onChange={handleChange}
							placeholder="Weight of Waste Yarn"
							required
						/>
						<br />
						<input
							type="number"
							name="waste_weight"
							value={form.waste_weight}
							onChange={handleChange}
							placeholder="Waste Weight"
							required
						/>
						<br />
						<input
							type="text"
							name="package_defect"
							value={form.package_defect}
							onChange={handleChange}
							placeholder="Package Pefect"
							required
						/>
						<br />
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
				</div>
			</div>
		</div>
	);
}
export default Warping;
