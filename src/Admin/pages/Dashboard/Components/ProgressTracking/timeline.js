import React, { useEffect, useState } from "react";
import axios from "axios";
import TimelineItem from "./TimelineItem";
import "./timeline.css";

export default function Timeline({ orderNo }) {
	const [processes, setProcesses] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:3006/processBar/${orderNo}`)
			.then((res) => {
				setProcesses(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [orderNo]);
	//active is giving length of blue line and done is for green mark
	// const items = [
	// 	{
	// 		i: 1,
	// 		name: "Yarn Storage",
	// 		active: true,
	// 		done: false,
	// 	},
	// 	{
	// 		i: 2,
	// 		name: "Winding",
	// 		active: true,
	// 		done: true,
	// 	},
	// 	{
	// 		i: 3,
	// 		name: "Warping",
	// 		active: true,
	// 		done: true,
	// 	},
	// 	{
	// 		i: 4,
	// 		name: "Looming",
	// 		active: true,
	// 		done: false,
	// 	},
	// 	// {
	// 	// 	i: 5,
	// 	// 	name: "Weaving",
	// 	// 	// active: true,
	// 	// 	done: false,
	// 	// },
	// 	{
	// 		i: 6,
	// 		name: "Checking",
	// 		active: false,
	// 		done: false,
	// 	},
	// 	{
	// 		i: 7,
	// 		name: "Repairing",
	// 		active: false,
	// 		done: false,
	// 	},
	// 	// {
	// 	// 	i: 8,
	// 	// 	name: "Packing",
	// 	// 	// active: false,
	// 	// 	done: false,
	// 	// },
	// 	// {
	// 	// 	i: 9,
	// 	// 	name: "Dispatch",
	// 	// 	// active: false,
	// 	// 	done: false,
	// 	// },
	// ];

	// processes.forEach((proc, i) => {
	// 	proc.name = procNames[i];
	// 	proc.active = true;
	// });

	// const totalItems = items.length;
	// const numberOfActiveItems = items.filter((item) => item.active).length;
	// // const numberOfActiveItems = 6;
	// const progressBarWidth =
	// 	totalItems > 1 ? ((numberOfActiveItems - 1) / (totalItems - 1)) * 100 : 0;

	// return (
	// 	<div className="timeline">
	// 		<div
	// 			className="timeline-progress"
	// 			style={{ width: `${progressBarWidth}%` }}
	// 		></div>
	// 		<div className="timeline-items">
	// 			{items.map((item, i) => (
	// 				<TimelineItem itemData={item}></TimelineItem>
	// 			))}
	// 		</div>
	// 	</div>
	// );

	//Required part
	const procNames = [
		"Yarn Storage",
		"Winding",
		"Warping",
		"Looming",
		"Checking",
		"Repairing",
		"Packing",
		"Dispatch",
	];
	var objProc1 = JSON.parse(JSON.stringify(processes));
	for (var i of objProc1) {
		if (i.status === "true") {
			i.active = true;
		} else i.active = false;
		i.name = procNames[i.processId];
	}
	const totalItems = objProc1.length;
	const numberOfActiveItems = objProc1.filter((item) => item.active).length;
	const progressBarWidth =
		totalItems > 1 ? ((numberOfActiveItems - 1) / (totalItems - 1)) * 100 : 0;

	return (
		<div className="timeline">
			<div
				className="timeline-progress"
				style={{ width: `${progressBarWidth}%` }}
			></div>
			<div className="timeline-items">
				{objProc1.map((process, i) => (
					<TimelineItem key={i} process={process}></TimelineItem>
				))}
			</div>
		</div>
	);
}
