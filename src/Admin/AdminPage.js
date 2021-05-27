import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./AdminPage.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./pages/Sidebar/Sidebar";

import AdminOrder from "./pages/OrderPage/AdminOrder";
import CustomizedTables from "./pages/Reports/Report";
import AdminProgressTracking from "./pages/ProgressTrackingDetail/AdminProgressTracking";

function AdminPage() {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/orders" component={AdminOrder} />
          <Route exact path="/admin/reports" component={CustomizedTables} />

          <Route
            exact
            path="/admin/progresstracking"
            component={AdminProgressTracking}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AdminPage;
