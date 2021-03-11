import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./pages/Sidebar/Sidebar";
import MiniSideBar from "./pages/MiniSideBar/MiniSideBar";
import { useState, useEffect } from "react";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const checkSize = () => {
    if (window.innerWidth <= 800) {
      setSideBarOpen(false);
    } else setSideBarOpen(true);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  const Brandclick = () => {
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <div className="main">
      {sideBarOpen ? (
        <Sidebar Brandclick={Brandclick}></Sidebar>
      ) : (
        <MiniSideBar Brandclick={Brandclick}></MiniSideBar>
      )}
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
