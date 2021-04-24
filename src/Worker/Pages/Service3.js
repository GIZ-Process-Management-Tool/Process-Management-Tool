import React from "react";
import "./Service1.css";
import { NavLink } from "react-router-dom";
import Nav from "./../Navbar/Nav";
import "./../Navbar/Nav.css";
const Service3 = () => {
  return (
    <>
      <Nav />
      <NavLink to="/worker1">
        <button>Back</button>
      </NavLink>
      <div className="container">
        <div class="box p6">
          <div className="checBox">
            <input type="checkbox" />
          </div>
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Grey Report </h1>
            <h2>Process-5</h2>
            <NavLink to="/greyReport">
              <button>
                <i class="fas fa-video"></i> GreyReport
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
      </div>
    </>
  );
};
export default Service3;
