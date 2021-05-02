import React from "react";
import "./../AppBar/Appbar.css";
import { NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { RiErrorWarningFill } from "react-icons/ri";
import "./../ErrorMessages/Error.css";
import brandLogo from "./../../Admin/pages/Sidebar/brandIcon.png";
const Appbar = ({ processName }) => {
	// const complete = () => {
	// 	axios
	// 		.put("http://localhost:3006/complete", { orderNo: form.order_no })
	// 		.then((res) => {
	// 			console.log(res);
	// 			alert("successful insert");
	// 		})

	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };
	return (
		<>
			<div className="Appbar-main">
				<div className="brandIconStyle">
					<img src={brandLogo} alt="Vatan Textiles" />
				</div>

				<div className="firstText">
					<h4 style={{ fontSize: "20px", color: "#ffff", fontStyle: "bold" }}>
						{processName}
					</h4>
				</div>
				<button className="firstIcon">
					<BiCheck
						style={{ fontSize: "44px", color: "#ffff", fontStyle: "bold" }}
					/>
				</button>
				<div className="ErrorIcon">
					<a class="button" href="#popup1">
						<RiErrorWarningFill
							style={{ fontSize: "32px", color: "#ffff", fontStyle: "bold" }}
						/>
					</a>
					<div id="popup1" class="overlay">
						<div class="popup">
							<h2>Report Error</h2>
							<a class="close" href="#">
								&times;
							</a>
							<div class="content">
								<textarea type="text" placeholder="error" />
								<button>Submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Appbar;
