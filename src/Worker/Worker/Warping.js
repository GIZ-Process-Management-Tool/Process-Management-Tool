import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../ErrorMessages/Error.css";
import Appbar from "./../AppBar/Appbar";
import "./InputFormStyle/formBGStyle.css";

function Warping() {
	// ------------------Automatic date-------------
	// var date = new Date();
	// var curDate = date.toISOString().slice(0, 10);
	const [form, setForm] = useState({
		// ------------------Automatic date-------------
		// date: curDate,
		order_no: "",
		// shift: "",
		weight_o_w_y: "",
		waste_weight: "",
		package_defect: "",
	});
	const [complete, setComplete] = useState(false);
	const toggleComplete = (e) => {
		if (e.target.checked) setComplete(true);
		else setComplete(false);
	};
	const [data, setData] = useState([]);
	useEffect((e) => {
		axios
			.get("http://localhost:3006/warping")
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
			.post("http://localhost:3006/warping", form)
			.then((res) => {
				console.log(res);
				alert("successful insert");
			})
			.catch((err) => {
				console.log(err);
			});
		axios
			.patch("http://localhost:3006/status", form)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
		if (complete) {
			axios
				.put("http://localhost:3006/warping", form)
				.then((res) => {
					console.log(res);
					alert("successful Update");
				})
				.catch((err) => {
					console.log(err);
				});
		}

		setForm({
			order_no: "",
			// date: curDate,
			date: "",
			// shift: "",
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
	function createSelectItems() {
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
				<div className="login">
					<Appbar processName="Warping Form" processId="2" procOrders={data} />
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
							name="weight_o_w_y"
							value={form.weight_o_w_y}
							onChange={handleChange}
							placeholder="Weight of Warped Yarn"
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
export default Warping;
