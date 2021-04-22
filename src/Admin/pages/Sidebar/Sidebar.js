import React from "react";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import brandLogo from "./brandIcon.png";
import { BiLogOut } from "react-icons/bi";

// https://react-icons.github.io/react-icons/icons?name=bi

function Sidebar() {
  return (
    <>
      <div className="NavContainer">
        <div className="FirstContainer">
          <div className="LogoContainer">
            <div className="BrandIcon">
              <img src={brandLogo} alt="Vatan Textiles" />
            </div>
            <div className="BrandTitle"> Vatan Textile </div>
          </div>
          <hr className="Divider"></hr>
          <div className="AllMenuContainer">
            {SidebarData.map((menu, index) => {
              console.log(index);
              return (
                <>
                  <div className="MenuContainer" key={index}>
                    <div className="MenuIcon">{menu.icon}</div>
                    <div className="MenuTitle">{menu.title}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="SecondContainer">
          <div className="LogOutIcon">
            <BiLogOut />
          </div>
          <div className="LogOutTitle"> Log Out </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
