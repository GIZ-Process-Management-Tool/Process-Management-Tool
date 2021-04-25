import React from "react";
import "./Adminlogin.css";
import { NavLink } from "react-router-dom";
//hello world!
const Adminlogin = () => {
  return (
    <div className="login_admin">
      {/* <img
        className="login__logo"
        src="https://scontent.fhyd16-1.fna.fbcdn.net/v/t1.6435-9/71497826_947598132261227_525864740476420096_n.png?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=VzyVmWh2La0AX-iPbFi&_nc_ht=scontent.fhyd16-1.fna&oh=edf4e814c4f568f09b4db812b03a4b44&oe=60A75C59"
      /> */}
      <div className="login__container">
        <h1>Admin Login</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />
          <NavLink exact to="/admin">
            <button type="submit" className="login__signInButton">
              Admin
            </button>
          </NavLink>
          <NavLink exact to="/worker1">
            <button type="submit" className="login__signInButton">
              Worker
            </button>
          </NavLink>
          {/* 
          <a href="#">Forgot Password ?</a> */}

          {/* <button className="login__registerButton">Worker Login</button> */}
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
