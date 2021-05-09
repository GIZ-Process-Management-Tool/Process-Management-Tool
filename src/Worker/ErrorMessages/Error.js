import React from "react";
import "./Error.css";
// import "./../Worker/InputFormStyle/formBGStyle.css";
// import Appbar from "./../AppBar/Appbar";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Error = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className="background-error1">
        <div className="main-error1">
          <form>
            <div className="report-heading1">
              <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
                Report Error!!!
              </h3>
              <AiOutlineCloseCircle className="report-btn" onClick={onClose} />
              {/* back
              </button> */}
            </div>
            <div className="login1">
              {/* <Appbar /> */}
              <div className="form1">
                <select name="cars" id="cars">
                  <option value="volvo">Raymond</option>
                  <option value="saab">Denim</option>
                  <option value="opel">Nike</option>
                  <option value="audi">Umbroo</option>
                </select>
                <input
                  type="number"
                  // value={form.order_no}
                  // onChange={handleChange}
                  name="order_no"
                  placeholder="Order Number"
                  required
                />
                <input
                  className="error-input1"
                  type="text"
                  // value={form.machine}
                  // onChange={handleChange}
                  name="machine"
                  placeholder="Report Error"
                  required
                />

                <input type="submit" value="Sign In" className="submit1" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Error;
