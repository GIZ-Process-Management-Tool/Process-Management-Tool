/*Order Form in React js*/
import React, { useState } from "react";
import axios from "axios";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";
import Appbar from "./../AppBar/Appbar";

function Order() {
	const [process, setProcess] = useState([
		{ id: 0, name: "Yarn Inverting", status: false },
		{ id: 1, name: "Winding", status: false },
		{ id: 2, name: "Warping", status: false },
		{ id: 3, name: "Looming", status: false },
		{ id: 4, name: "Checking", status: false },
		{ id: 5, name: "Repairing", status: false },
	]);
	const [form, setForm] = useState({
		order_no: "",
		date: "",
		company: "",
		gst: "",
		quality: "",
		ppc: "",
		rate: "",
		deadline: "",
		target: "",
	});

	const toggleCheck = (e) => {
		process.map(
			(items) =>
				items.id === parseInt(e.target.value) &&
				(items.status = e.target.checked)
		);
		setProcess([...process], process);
	};

	function handleSubmit(e) {
		e.preventDefault();
		let allProc = [];
		process.map((eachProc) => {
			if (eachProc.status === true) {
				allProc.push(eachProc.id);
			}
			return allProc;
		});
		axios
			.post("http://localhost:3006/order", { form: form, process: allProc })
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
			company: "",
			gst: "",
			quality: "",
			ppc: "",
			rate: "",
			deadline: "",
			target: "",
		});

		process.map((eachProc) => (eachProc.status = false));
		setProcess([...process], process);
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
						<Appbar processName="Order Form" />
						<input
							type="Number"
							value={form.order_no}
							onChange={handleChange}
							name="order_no"
							placeholder="Order NO"
							required
						/>
						<input
							type="date"
							value={form.date}
							onChange={handleChange}
							name="date"
							placeholder="date"
							required
						/>
						<input
							type="text"
							name="company"
							value={form.company}
							onChange={handleChange}
							placeholder="Company Name"
							required
						/>
						<input
							type="text"
							name="gst"
							value={form.gst}
							onChange={handleChange}
							placeholder="GST"
							required
						/>
						<input
							type="text"
							name="quality"
							value={form.quality}
							onChange={handleChange}
							placeholder="Quality"
							required
						/>
						<input
							type="number"
							name="ppc"
							value={form.ppc}
							onChange={handleChange}
							placeholder="PPC"
							required
						/>
						<input
							type="number"
							name="rate"
							value={form.rate}
							onChange={handleChange}
							placeholder="Rate"
							required
						/>
						<input
							type="date"
							name="deadline"
							value={form.deadline}
							onChange={handleChange}
							placeholder="Deadline"
							required
						/>
						<input
							type="number"
							name="target"
							value={form.target}
							onChange={handleChange}
							placeholder="Target"
							required
						/>
						{/* process checkBoxes */}
						{process.map((eachProc) => {
							const { id, name, status } = eachProc;
							return (
								<>
									<div key={id} className="checkBox">
										<h3>{name}</h3>
										<input
											value={id}
											type="checkbox"
											checked={status}
											onChange={toggleCheck}
										/>
									</div>
								</>
							);
						})}
						<input type="submit" value="SUBMIT" class="submit" />
					</div>
				</div>
			</form>
			<div id="popup1" className="overlay">
				<div className="popup">
					<h2>Report Error</h2>
					<a className="close" href="#">
						&times;
					</a>
					<div className="content">
						<input className="errorInput" type="text" placeholder="error" />
						<button className="button">Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Order;
