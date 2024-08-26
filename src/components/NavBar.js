import React from "react";
import "../styles/NavBar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

function NavBar() {
  return (
    <>
      <div className="navBar">
        <div className="navBarTitles">FINANCE FLOW</div>
        <div className="navBarOptions">
          <ul>
            <li>Dashboard</li>
            <li>My Wallet</li>
            <li>My Stores</li>
            <li>Analysis</li>
            <li>Market</li>
            <li>Card</li>
            <li>Trasnfer</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
