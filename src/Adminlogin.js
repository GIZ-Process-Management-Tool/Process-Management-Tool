import React, { useState } from "react";
import "./Adminlogin.css";

const Adminlogin = () => {
  return (
    <div className="login">
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

          <button type="submit" className="login__signInButton">
            Sign In
          </button>

          <a href="#">Forgot Password ?</a>

          {/* <button className="login__registerButton">Worker Login</button> */}
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;