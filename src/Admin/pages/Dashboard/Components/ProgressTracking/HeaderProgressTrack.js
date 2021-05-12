import axios from "axios";
import React, { useState, useEffect } from "react";
import "./HeaderProgressTrack.css";
import Timeline from "./timeline";

const HeaderProgressTrack = () => {
	const [orderValue, setOrder] = useState([]);
	const [selectedOrder, setSelectedOrder] = useState(1);

	useEffect((e) => {
		axios
			.get("http://localhost:3006/processBarOrders")
			.then((res) => {
				setOrder(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	function handleChange(event) {
		setSelectedOrder(event.target.value);
	}

	function createSelectItems() {
		let items = [];
		for (let i = 0; i < orderValue.length; i++) {
			items.push(
				<option key={orderValue[i].order_no} value={orderValue[i].order_no}>
					{orderValue[i].order_no + " - " + orderValue[i].company}
				</option>
			);
		}
		return items;
	}
	return (
		<>
			<div className="PTHead">
				<div className="PTTitle">Progress So Far</div>
				<select
					value={selectedOrder}
					name="order_no"
					onChange={handleChange}
					placeholder="Order no."
					className="dropDown"
				>
					{createSelectItems()}
				</select>
				<button className="PTDetailButton">Details</button>
			</div>
			<Timeline orderNo={parseInt(selectedOrder)} />
		</>
	);
};

export default HeaderProgressTrack;
