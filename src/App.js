import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./pages/Sidebar/Sidebar";

function App() {
  return (
    <div className="main">
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
