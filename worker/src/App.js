import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Navbar/Nav";
import Service1 from "./Pages/Service1";
import Service2 from "./Pages/Service2";
import Demo from "./Pages/Demo";
import Order from "./Input_forms/Order";
import Loomloadingchart from "./Input_forms/Loom_Loading_Chart";
import LoomperDay from "./Input_forms/LoomPerDay";
import Shift from "./Input_forms/Shift";
import GreyReport from "./Input_forms/GreyReport";
import Repairing from "./Input_forms/Repairing";
import DownTime from "./Input_forms/Downtime";
import Demo2 from "./Input_forms/Demo2";
// import Warping from "../../src/pages/Warping";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Service1} />
        <Route path="/service2" component={Service2} />
        <Route path="/demo" component={Demo2} />
        <Route path="/order" component={Order} />
        <Route path="/loomloadingchart" component={Loomloadingchart} />
        <Route path="/loomperday" component={LoomperDay} />
        <Route path="/shift" component={Shift} />
        {/* <Route path="/warping" component={Warping} /> */}
        <Route path="/greyReport" component={GreyReport} />
        <Route path="/repairing" component={Repairing} />
        <Route path="/downtime" component={DownTime} />
      </Switch>
    </>
  );
}

export default App;
