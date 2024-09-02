import "./App.css";
import SideBar from "./components/SideBar.js";
import NavBar from "./components/NavBar.js";
import Dashboard from "./pages/Dashboard.js";

function App() {
  return (
    <div className="App">
      <SideBar />
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
