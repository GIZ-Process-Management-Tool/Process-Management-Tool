import React from "react";
import { NavLink } from "react-router-dom";
import "./Service1.css";
// import Service2 from "./Service2";
const Service1 = () => {
  return (
    <>
      <div class="container">
        <div class="box p1">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1608841802877-d37c913623e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHRleHRpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>1) Order (input)</h1>
            <h2>Process-1</h2>
            <NavLink to="/Order">
              <button>Order Now</button>
            </NavLink>
          </div>
        </div>

        <div class="box p2">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1517146783983-418c681b56c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGV4dGlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>2)loadingchart(input)</h1>
            <h2>Process-2</h2>
            <NavLink to="/loomloadingchart">
              <button>loomloading</button>
            </NavLink>
          </div>
        </div>

        <div class="box p3">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1611574557210-e18bc59fd02b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHRleHRpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>(3) Loom per day charges</h1>
            <h2>Process-3</h2>
            <NavLink to="/loomperday">
              <button>Loom Per Day</button>
            </NavLink>
          </div>
        </div>

        <div class="box p4">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1524292332709-b33366a7f165?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNoaWZ0JTIwdGV4dGlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>(4) Shift</h1>
            <h2>Process-4</h2>
            <NavLink to="/shift">
              <button>Shift</button>
            </NavLink>
          </div>
        </div>
        <div class="box p5">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Grey Report </h1>
            <h2>Process-5</h2>
            <NavLink to="/greyReport">
              <button>GreyReport</button>
            </NavLink>
          </div>
        </div>
        <div class="box p6">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1476683874822-744764a2438f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGV4dGlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Repairing (input)</h1>
            <h2>Process-6</h2>
            <NavLink to="/repairing">
              <button>Repairing</button>
            </NavLink>
          </div>
        </div>
        <div class="box p7">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1563837738662-c86ef2ba99f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRleHRpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Downtime (input) </h1>
            <h2>Process-7</h2>
            <NavLink to="/downtime">
              <button>Downtime</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service1;
