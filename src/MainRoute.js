import React from "react";
import { Switch, Route } from "react-router-dom";
// import "./App.css";
// import Nav from "./Worker/Navbar/Nav";
import Service1 from "./Worker/Pages/Service1";
import Service2 from "./Worker/Pages/Service2";
// import Demo from "./Worker/Pages/Demo";
<<<<<<< HEAD
import Order from "./Worker/Input_forms/Order";
import Loomloadingchart from "./Worker/Input_forms/Loomloadingchart";
import LoomperDay from "./Worker/Input_forms/LoomPerDay";
import Shift from "./Worker/Input_forms/Shift";
import GreyReport from "./Worker/Input_forms/GreyReport";
import Repairing from "./Worker/Input_forms/Repairing";
import DownTime from "./Worker/Input_forms/Dwontime";

import Worker from "./Worker/loginForm/Worker";
=======
import Order from "./Worker/Worker/Order";
// import Loomloadingchart from "./Worker/Worker/Loomloadingchart";
import LoomperDay from "./Worker/Worker/LoomPerDay";
import Shift from "./Worker/Worker/Shift";
import GreyReport from "./Worker/Worker/GreyReport";
import Repairing from "./Worker/Worker/Repairing";
import DownTime from "./Worker/Worker/Downtime";
>>>>>>> 4ae8fe6495b88e1fc7ad0039c86cae1cb2546db3
import AdminPage from "./Admin/AdminPage";
import Adminlogin from "./Adminlogin";
import Looming from "./Admin/Loom_Loading_Chart.js"
import Yarn from "./Worker/Worker/Packing.js";
import Warping from "./Worker/Worker/Warping.js";
import Winding from "./Worker/Worker/Winding.js";
import YarnStorage from "./Worker/Worker/Yarn_storage.js";

function MainRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Adminlogin} />
        {/* <Route exact path="/packing" component={Yarn} /> */}
        {/* <Route exact path="/warping" component={Warping} /> */}
        {/* <Route exact path="/winding" component={Winding} /> */}
        {/* <Route exact path="/yarn_storage" component={YarnStorage} /> */}
        <Route exact path="/worker1" component={Service1} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/service2" component={Service2} />
<<<<<<< HEAD

        <Route exact path="/worker" component={Worker} />

=======
>>>>>>> 4ae8fe6495b88e1fc7ad0039c86cae1cb2546db3
        <Route exact path="/order" component={Order} />
        <Route exact path="/loomloadingchart" component={Looming} />
        <Route exact path="/loomperday" component={LoomperDay} />
        <Route exact path="/shift" component={Shift} />
        <Route exact path="/greyReport" component={GreyReport} />
        <Route exact path="/repairing" component={Repairing} />
        <Route exact path="/downtime" component={DownTime} />
      </Switch>
      <Yarn/>
      <Warping/>
      <Winding/>
      <YarnStorage/>
    </>
  );
}

export default MainRoute;
