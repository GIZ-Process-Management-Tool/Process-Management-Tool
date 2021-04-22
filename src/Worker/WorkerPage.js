import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
// import "./App.css";
import Nav from "./Navbar/Nav";
import Service1 from "./Pages/Service1";
import Service2 from "./Pages/Service2";
// import Demo from "./Worker/Pages/Demo";
import Order from "./Input_forms/Order";
import Loomloadingchart from "./Input_forms/Loomloadingchart";
import LoomperDay from "./Input_forms/LoomPerDay";
import Shift from "./Input_forms/Shift";
import GreyReport from "./Input_forms/GreyReport";
import Repairing from "./Input_forms/Repairing";
import DownTime from "./Input_forms/Dwontime";
import Demo2 from "./Input_forms/Demo2";
import Worker from "./loginForm/Worker";
import Admin from "./loginForm/Admin";

function WorkerPage() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/worker1" component={Service1} />
        <Route path="/service2" component={Service2} />
        <Route path="/admin" component={Admin} />
        <Route path="/worker" component={Worker} />
        <Route path="/demo" component={Demo2} />
        <Route path="/order" component={Order} />
        <Route path="/loomloadingchart" component={Loomloadingchart} />
        <Route path="/loomperday" component={LoomperDay} />
        <Route path="/shift" component={Shift} />
        <Route path="/greyReport" component={GreyReport} />
        <Route path="/repairing" component={Repairing} />
        <Route path="/downtime" component={DownTime} />
      </Switch>
    </>
  );
}

export default WorkerPage;
