import React from "react";
import { NavLink } from "react-router-dom";
import "./Service1.css";
// import Service2 from "./Service2";
import Nav from "./../Navbar/Nav";
import "./../Navbar/Nav.css";
const Service1 = () => {
  return (
    <>
      <Nav />
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
        <div class="box p6">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Yarn</h1>
            <h2>Process-2</h2>
            <NavLink to="/yarnstorage">
              <button>
                <i class="fas fa-video"></i> Yarn
              </button>
            </NavLink>
          </div>
        </div>
        <div class="box p5">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Warping </h1>
            <h2>Process-3</h2>
            <NavLink to="/warping">
              <button>
                <i class="fas fa-video"></i> Warping
              </button>
            </NavLink>
            <div class="favs">
              <button class="mark">
                <i class="fas fa-bookmark"></i>
              </button>
              <button class="fav">
                <i class="fas fa-heart"></i>
              </button>
              <button class="fav">
                <i class="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="box p4">
          <div className="checBox">
            <input type="checkbox" />
          </div>
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Winding </h1>
            <h2>Process-4</h2>
            <NavLink to="/winding">
              <button>
                <i class="fas fa-video"></i> Winding
              </button>
            </NavLink>
            <div class="favs">
              <button class="mark">
                <i class="fas fa-bookmark"></i>
              </button>
              <button class="fav">
                <i class="fas fa-heart"></i>
              </button>
              <button class="fav">
                <i class="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="box p3">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Looming </h1>
            <h2>Process-5</h2>
            <NavLink to="/service2">
              <button>Looming</button>
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
        <div class="box p6">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Checking Report </h1>
            <h2>Process-5</h2>
            <NavLink to="/service3">
              <button>Checking</button>
            </NavLink>
          </div>
        </div>
        <div class="box p5">
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1524292332709-b33366a7f165?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNoaWZ0JTIwdGV4dGlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Packing</h1>
            <h2>Process-8</h2>
            <NavLink to="/packing">
              <button>Packing</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service1;
