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
    </>
  );
};
export default Error;
