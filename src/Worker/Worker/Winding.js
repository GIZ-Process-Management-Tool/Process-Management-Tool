import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";

function Winding() {
	const [form, setForm] = useState({
		yarn_received: "",
		no_of_cones: "",
		size_of_cones: "",
		no_of_doffs: "",
		weight_of_cones: "",
		weight_of_waste: "",
		order_no: "",
		date: "",
		shift: "",
		package_defect: "",
	});

	function handleSubmit(e) {
		e.preventDefault();

		axios
			.post("http://localhost:3006/winding", form)
			.then((res) => {
				console.log(res);
				alert("successful insert");
			})
			.catch((err) => {
				console.log(err);
			});

		setForm({
			yarn_received: "",
			no_of_cones: "",
			size_of_cones: "",
			no_of_doffs: "",
			weight_of_cones: "",
			weight_of_waste: "",
			order_no: "",
			date: "",
			shift: "",
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
				<div className="login">
					<div className="form">
						<div className="upperButtons">
							<NavLink to="/worker1">
								<button class="button">Back</button>
							</NavLink>
							<button class="button">Complete</button>
							<a class="button" href="#popup1">
								Error
							</a>
						</div>
						<h2>Winding Form</h2>

						<input
							type="number"
							vlaue={form.yarn_received}
							onChange={handleChange}
							name="yarn_received"
							placeholder="Yarn Received"
							required
						/>
						<br />
						<input
							type="number"
							value={form.no_of_cones}
							onChange={handleChange}
							name="no_of_cones"
							placeholder="No of cones"
							required
						/>
						<br />
						<input
							type="number"
							value={form.size_of_cones}
							onChange={handleChange}
							name="size_of_cones"
							placeholder="Size of Cones"
							required
						/>
						<br />
						<input
							type="number"
							value={form.no_of_doffs}
							onChange={handleChange}
							name="no_of_doffs"
							placeholder="No of doffs"
							required
						/>
						<br />
						<input
							type="number"
							value={form.weight_of_cones}
							onChange={handleChange}
							name="weight_of_cones"
							placeholder="Weight of cones"
							required
						/>
						<br />
						<input
							type="number"
							value={form.weight_of_waste}
							onChange={handleChange}
							name="weight_of_waste"
							placeholder="Weight of Waste"
							required
						/>
						<br />
						<input
							type="number"
							value={form.order_no}
							onChange={handleChange}
							name="order_no"
							placeholder="Order No"
							required
						/>
						<br />
						<input
							type="date"
							value={form.date}
							onChange={handleChange}
							name="date"
							placeholder="Date"
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
						<input
							type="text"
							value={form.package_defect}
							onChange={handleChange}
							name="package_defect"
							placeholder="Package Defect"
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
export default Winding;
