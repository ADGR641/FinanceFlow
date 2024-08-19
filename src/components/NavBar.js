import React from "react";
import "../styles/NavBar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Reorder } from "@mui/icons-material";

function NavBar() {
  return (
    <div className="navBar">
      <div className="leftSide">
        <a>Finance Flow</a>
      </div>
      <div className="rightSide">
        <a>Dashboard</a>

        <a>Transaction</a>

        <a>Categories</a>

        <a>Budget</a>

        <a>Report</a>

        <a>Goals</a>

        <a>Profile</a>
      </div>
      <div className="navIcon">
        <ReorderIcon />
      </div>
    </div>
  );
}

export default NavBar;
