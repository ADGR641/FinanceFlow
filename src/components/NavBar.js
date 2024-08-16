import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navBar">
      <a className="title">Finance Flow</a>
      <ul>
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Transaction</a>
        </li>
        <li>
          <a>Categories</a>
        </li>
        <li>
          <a>Budget</a>
        </li>
        <li>
          <a>Report</a>
        </li>
        <li>
          <a>Goals</a>
        </li>
        <li>
          <a>Profile</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
