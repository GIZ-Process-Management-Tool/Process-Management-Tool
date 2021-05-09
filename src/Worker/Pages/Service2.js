import React from "react";
import "./Service1.css";
import { NavLink } from "react-router-dom";
import Nav from "./../Navbar/Nav";
import "./../Navbar/Nav.css";

const Service2 = () => {
	return (
		<>
			<Nav />
			<NavLink to="/worker1">
				{/* <ArrowBackIcon /> */}
				<button>Back</button>
			</NavLink>

			<div className="container">
				<div className="serviceBox p3">
					<div className="member">
						<img
							src="https://images.unsplash.com/photo-1517146783983-418c681b56c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGV4dGlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
						<h1>Loading chart</h1>
						{/* <h2>Process-2</h2> */}
						<NavLink to="/loomloadingchart">
							<button>Loom Loading</button>
						</NavLink>
					</div>
				</div>
				<div className="serviceBox p4">
					<div className="member">
						<img
							src="https://images.unsplash.com/photo-1611574557210-e18bc59fd02b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHRleHRpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
						<h1>Per day charges</h1>
						{/* <h2>Process-3</h2> */}
						<NavLink to="/loomperday">
							<button>Charges</button>
						</NavLink>
					</div>
				</div>
				<div className="serviceBox p7">
					<div className="member">
						<img
							src="https://images.unsplash.com/photo-1563837738662-c86ef2ba99f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRleHRpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
						<h1>Target</h1>
						{/* <h2>Process-7</h2> */}
						<NavLink to="/target">
							<button>Enter</button>
						</NavLink>
					</div>
				</div>
				<div className="serviceBox p5">
					<div className="member">
						<img
							src="https://images.unsplash.com/photo-1524292332709-b33366a7f165?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNoaWZ0JTIwdGV4dGlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
						<h1>Shift</h1>
						{/* <h2>Process-4</h2> */}
						<NavLink to="/shift">
							<button>Shift</button>
						</NavLink>
					</div>
				</div>
				<div className="serviceBox p7">
					<div className="member">
						<img
							src="https://images.unsplash.com/photo-1563837738662-c86ef2ba99f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRleHRpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
						<h1>Downtime</h1>
						{/* <h2>Process-7</h2> */}
						<NavLink to="/downtime">
							<button>Downtime</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};
export default Service2;
