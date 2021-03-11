import React from "react";
import { SidebarData } from "./SidebarData";
import "./MiniSidebar.css";
import brandLogo from "./brandIcon.png";
import { BiLogOut } from "react-icons/bi";

function MiniSideBar({ Brandclick }) {
  return (
    <>
      <div className="MNavContainer">
        <div className="MFirstContainer">
          <div className="MLogoContainer" onClick={Brandclick}>
            <div className="MBrandIcon">
              <img src={brandLogo} alt="Vatan Textiles" />
            </div>
          </div>
          <hr className="MDivider"></hr>
          <div>
            {SidebarData.map((menu, index) => {
              return (
                <>
                  <div className="MMenuContainer" key={index}>
                    <div className="MMenuIcon">{menu.icon}</div>
                    {/* <div className="MMenuTitle"><BiChevronRight/></div> */}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="MSecondContainer">
          <div className="MLogOutIcon">
            <BiLogOut />
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniSideBar;
