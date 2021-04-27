import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./AdminPage.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./pages/Sidebar/Sidebar";

import AdminOrder from "./pages/OrderPage/AdminOrder";
import AdminProgressTracking from "./pages/ProgressTrackingDetail/AdminProgressTracking";

function AdminPage() {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
          <Route path="/orders" component={AdminOrder} />

          <Route path="/progresstracking" component={AdminProgressTracking} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AdminPage;
