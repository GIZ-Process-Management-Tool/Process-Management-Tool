import React from "react";
import { Switch, Route } from "react-router-dom";
import Service1 from "./Worker/Pages/Service1";
import Service2 from "./Worker/Pages/Service2";
import Service3 from "./Worker/Pages/Service3";
// import Demo from "./Worker/Pages/Demo";

import Order from "./Worker/Worker/Order";

import LoomperDay from "./Worker/Worker/LoomPerDay";
import Shift from "./Worker/Worker/Shift";
import GreyReport from "./Worker/Worker/GreyReport";
import Repairing from "./Worker/Worker/Repairing";
import DownTime from "./Worker/Worker/Downtime";
import AdminPage from "./Admin/AdminPage";
import Adminlogin from "./Adminlogin";
import Looming from "./Admin/Loom_Loading_Chart.js";
import Yarn from "./Worker/Worker/Packing.js";
import Warping from "./Worker/Worker/Warping.js";
import Winding from "./Worker/Worker/Winding.js";
import YarnStorage from "./Worker/Worker/Yarn_storage.js";

import LoomingMain from "./Worker/Worker/LoomingMain";
import Packing from "./Worker/Worker/Packing";

function MainRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Adminlogin} />
        <Route exact path="/packing" component={Yarn} />
        <Route exact path="/warping" component={Warping} />
        <Route exact path="/winding" component={Winding} />
        <Route exact path="/yarn_storage" component={YarnStorage} />
        <Route exact path="/worker1" component={Service1} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/service2" component={Service2} />
        <Route exact path="/service3" component={Service3} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/loomloadingchart" component={Looming} />
        <Route exact path="/loomperday" component={LoomperDay} />
        <Route exact path="/shift" component={Shift} />
        <Route exact path="/greyReport" component={GreyReport} />
        <Route exact path="/repairing" component={Repairing} />
        <Route exact path="/downtime" component={DownTime} />
        <Route exact path="/packing" component={Packing} />
        <Route exact path="/warping" component={Warping} />
        <Route exact path="/winding" component={Winding} />
        <Route exact path="/yarnstorage" component={YarnStorage} />

        <Route exact path="/loom" component={LoomingMain} />
      </Switch>
      {/* <Yarn />
      <Warping />
      <Winding />
      <YarnStorage /> */}
    </>
  );
}

export default MainRoute;
