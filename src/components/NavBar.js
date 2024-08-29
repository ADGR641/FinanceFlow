import React from "react";
import "../styles/NavBar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";

function Home() {
  return (
    <>
      {/* Make it into a component later */}
      <div className="dashBoard">
        <div className="pageTitle">Dashboard</div>
        <div className="notification">
          <NotificationsIcon />
        </div>
        <div>
          <Person2Icon />
        </div>
      </div>
    </>
  );
}

export default Home;
