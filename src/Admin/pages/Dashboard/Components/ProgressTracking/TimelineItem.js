import React, { useState } from "react";
import TimelineError from "./ErrorComponent";
import "./timeline";

export default function TimelineItem({ process }) {
	// const [isShown, setIsShown] = useState(false);
	let status = false;
	if (process.status === "true") status = true;
	else status = false;

	return (
		<>
			<div
				key={process.processId}
				className={"timeline-item" + (process.active ? " active" : " ")}
				// onMouseEnter={() => setIsShown(true)}
				// onMouseLeave={() => setIsShown(false)}
			>
				<div className={status ? "done" : " "}></div>
				{/* {isShown && <TimelineError />} */}
				<div className="timeline-content">{process.name}</div>
			</div>
		</>
	);
}
