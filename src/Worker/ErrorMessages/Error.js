import React from "react";
import "./Error.css";
const Error = () => {
  return (
    <>
      {/* <div class="box">
        <a class="button" href="#popup1">
          Let me Pop up
        </a>
      </div> */}

      <div id="popup1" className="overlay">
        <div className="popup">
          <h2>Report Error</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">
            <textarea type="text" placeholder="error" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Error;
