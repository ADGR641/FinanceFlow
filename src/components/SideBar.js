import React from "react";
import "../styles/SideBar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WalletIcon from "@mui/icons-material/Wallet";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import TransformIcon from "@mui/icons-material/Transform";
import SettingsIcon from "@mui/icons-material/Settings";

function NavBar() {
  return (
    <>
      <div className="navBar">
        <div className="navBarTitles">FINANCE FLOW</div>
        <div className="navBarOptions">
          <ul>
            <li>
              <div className="navItem">
                <DashboardIcon />
                <a>Dashboard </a>
              </div>
            </li>
            <li>
              <div className="navItem">
                <WalletIcon />
                <a>My Wallet </a>
              </div>
            </li>
            <li>
              <div className="navItem">
                <StorefrontIcon />
                <a>My Stores </a>
              </div>
            </li>
            <li>
              <div className="navItem">
                <AnalyticsIcon />
                <a>Analysis </a>
              </div>
            </li>
            <li>
              <div className="navItem">
                <StoreIcon />
                <a>Market </a>
              </div>
            </li>
            <li>
              <div className="navItem">
                <CreditCardIcon />
                <a>Cards </a>
              </div>
            </li>
            <li>
              <div className="navItem">
                <TransformIcon />
                <a>Transfer </a>
              </div>
            </li>
            <li>
              <div className="navItem">
                <SettingsIcon />
                <a>Setting </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
