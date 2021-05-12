import React, { useState } from "react";
import axios from "axios";
import "./Error.css";
// import "./../Worker/InputFormStyle/formBGStyle.css";
// import Appbar from "./../AppBar/Appbar";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Error = ({ open, onClose, procId, procOrders }) => {
	const [form, setForm] = useState({
		order_no: "",
		processId: procId,
		remarks: "",
	});

	if (!open) return null;

	function createSelectItems() {
		let items = [];
		for (let i = 0; i < procOrders.length; i++) {
			items.push(
				<option key={procOrders[i].orderNo} value={procOrders[i].orderNo}>
					{procOrders[i].orderNo + " - " + procOrders[i].company}
				</option>
			);
		}
		return items;
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
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.patch("http://localhost:3006/error", { form: form })
			.then((res) => {
				console.log(res);
				alert("Error reported");
			})
			.catch((err) => {
				console.log(err);
			});
		setForm({
			order_no: "",
			remarks: "",
		});
	};
	return (
		<>
			<div className="background-error1">
				<div className="main-error1">
					<form>
						<div className="report-heading1">
							<h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
								Report Error!!!
							</h3>
							<AiOutlineCloseCircle className="report-btn" onClick={onClose} />
						</div>
						<div className="login1">
							<div className="form1">
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
								<input
									className="error-input1"
									type="text"
									value={form.remarks}
									onChange={handleChange}
									name="remarks"
									placeholder="Remarks"
									required
								/>
								<input
									type="submit"
									value="Report"
									className="submit1"
									onClick={handleSubmit}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default Error;
