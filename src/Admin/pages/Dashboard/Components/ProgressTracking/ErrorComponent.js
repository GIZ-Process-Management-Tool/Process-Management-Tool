import React from "react";
import "./timeline.css";

const TimelineError = ({ process }) => {
	return (
		<>
			{process.error ? (
				<div className="showError">
					{process.time} - {process.error}
				</div>
			) : (
				""
			)}
		</>
	);
};

export default TimelineError;
