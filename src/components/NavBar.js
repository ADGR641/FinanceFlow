import React from "react";
import "../styles/NavBar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

function NavBar() {
  const [showNavBar, activeNavBar] = useState(false);
  //['current State',' Modify State']

  const navClick = () => {
    activeNavBar(!showNavBar);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Kreon"
        rel="stylesheet"
      ></link>
      <div className="navBar">
        <div className="leftSide">
          <a className="navBarTitle">FINANCE FLOW</a>
        </div>
        <button className="navIcon" onClick={navClick}>
          <ReorderIcon />
        </button>
        <div className="rightSide">
          <a>Dashboard</a>
          <a>Transaction</a>
          <a>Categories</a>
          <a>Budget</a>
          <a>Report</a>
          <a>Goals</a>
          <a>Profile</a>
        </div>
      </div>
      <div className="hiddenRightSide" id={showNavBar ? "show" : "hide"}>
        {/* if true then set to show if false then set to hide  */}
        <a>Dashboard</a>
        <a>Transaction</a>
        <a>Categories</a>
        <a>Budget</a>
        <a>Report</a>
        <a>Goals</a>
        <a>Profile</a>
      </div>
    </>
  );
}

export default NavBar;
