import React from "react";
import "../styles/Dashboard.css";
import Person2Icon from "@mui/icons-material/Person2";
function Dashbaord() {
  return (
    <>
      <div className="dashBoardBody">
        <div className="introduction">
          <Person2Icon />
          <div className="greetName">
            Good Morning, Andrian
            <div className="introductionFiller">
              Let's manage your wallet finance
            </div>
          </div>
        </div>

        <div className="totalStats">
          <div className="totalRevenue">Total Revenue</div>
          <div className="totalExpense">Expenses</div>
          <div className="totalProfit">Profit</div>
        </div>
      </div>
    </>
  );
}

export default Dashbaord;
