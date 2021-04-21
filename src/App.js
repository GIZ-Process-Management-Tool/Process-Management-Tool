import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./pages/Sidebar/Sidebar";
import Warping from "./pages/Frontend/Warping"
import Yarn from "./pages/Frontend/Yarn_Storage"
import Winding from "./pages/Frontend/Winding"
import Packing from "./pages/Frontend/Packing"

function App() {
  return (
    <div className="main">
      <Packing></Packing>
      {/* <Winding></Winding> */}
      {/* <Yarn></Yarn>  */}
      {/* <Warping></Warping> */}
      {/* <Sidebar></Sidebar>
      <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;