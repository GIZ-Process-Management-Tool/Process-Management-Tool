import React from "react";
import "../../Dashboard.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const MainNavBar = () => {
  return (
    <div className="HeaderRow_1">
      <div className="PageHeader">
        <span> Dashboard </span>
      </div>
      <div className="DBSearchBar">
        <input type="text" placeholder="Search here..."></input>
      </div>
      <div className="ProfileContainer">
        <div className="noticationIcon">
          <IoMdNotificationsOutline> </IoMdNotificationsOutline>
        </div>
        <div classNmae="ProfileContainer" />
        <div className="ProfileIconContainer">
          <CgProfile> </CgProfile>
        </div>
        <div className="profileName">
          <span> Sumit Deshpande </span>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
