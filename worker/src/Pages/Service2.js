import React from "react";
import { NavLink } from "react-router-dom";
import "./Service1.css";
const Service2 = () => {
  return (
    <>
      <h2>Service2 Start from Here</h2>

      <div class="box p2">
        <div class="member">
          <img
            src="https://static.standard.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2012/01/03/09/johnnydepp-500.jpg"
            alt=""
          />
          <h1>Johnny Depp</h1>
          <h2>Actor | Musician</h2>
          <NavLink to="/order">
            <button>
              <i class="fas fa-video"></i> Order NOw
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
    </>
  );
};
export default Service2;
