import "./App.css";
import SideBar from "./components/SideBar.js";
import NavBar from "./components/NavBar.js";
import Dashbaord from "./pages/Dashbaord.js";

function App() {
  return (
    <div className="App">
      <SideBar />
      <NavBar />
      <Dashbaord />
    </div>
  );
}

export default App;
