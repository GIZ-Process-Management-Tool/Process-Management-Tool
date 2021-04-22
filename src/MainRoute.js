import React from "react";
import { Switch, Route } from "react-router-dom";
// import "./App.css";
// import Nav from "./Worker/Navbar/Nav";
import Service1 from "./Worker/Pages/Service1";
import Service2 from "./Worker/Pages/Service2";
// import Demo from "./Worker/Pages/Demo";
import Order from "./Worker/Input_forms/Order";
import Loomloadingchart from "./Worker/Input_forms/Loomloadingchart";
import LoomperDay from "./Worker/Input_forms/LoomPerDay";
import Shift from "./Worker/Input_forms/Shift";
import GreyReport from "./Worker/Input_forms/GreyReport";
import Repairing from "./Worker/Input_forms/Repairing";
import DownTime from "./Worker/Input_forms/Dwontime";
import Demo2 from "./Worker/Input_forms/Demo2";
import Worker from "./Worker/loginForm/Worker";
import AdminPage from "./Admin/AdminPage";
import Adminlogin from "./Adminlogin";

function MainRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Adminlogin} />
        <Route exact path="/worker1" component={Service1} />
        <Route exact path="/" component={AdminPage} />
        <Route exact path="/service2" component={Service2} />

        <Route exact path="/worker" component={Worker} />
        <Route exact path="/demo" component={Demo2} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/loomloadingchart" component={Loomloadingchart} />
        <Route exact path="/loomperday" component={LoomperDay} />
        <Route exact path="/shift" component={Shift} />
        <Route exact path="/greyReport" component={GreyReport} />
        <Route exact path="/repairing" component={Repairing} />
        <Route exact path="/downtime" component={DownTime} />
      </Switch>
    </>
  );
}

export default MainRoute;
