import React from "react";
import "../styles/Dashboard.css";
import Person2Icon from "@mui/icons-material/Person2";
import LineChart from "../components/LineChart.js";

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
          <div className="totalRevenue">
            <div className="totalStatsTopSide">
              <div className="totalStatsPercent">+10%</div>
              <div className="totalStatschart"></div>
            </div>
            <div className="totalStatsBottomSide">
              <div className="totalStatsTitle">Total Revenue</div>
              <div className="totalStatsAmount">$100,000</div>
            </div>
          </div>
          <div className="totalExpenses">
            <div className="totalStatsTopSide">
              <div className="totalStatsPercent">-8.8%</div>
              <div className="totalStatschart">Picture</div>
            </div>
            <div className="totalStatsBottomSide">
              <div className="totalStatsTitle">Total Expenses</div>
              <div className="totalStatsAmount">$80,000</div>
            </div>
          </div>
          <div className="totalProfit">
            <div className="totalStatsTopSide">
              <div className="totalStatsPercent">-21.8%</div>
              <div className="totalStatschart">Picture</div>
            </div>
            <div className="totalStatsBottomSide">
              <div className="totalStatsTitle">Total Profit</div>
              <div className="totalStatsAmount">$21,600</div>
            </div>
          </div>
        </div>

        <div className="analysisSection">
          <div className="analysisTitle">Analysis</div>
          <div className="analysisChart">
            <LineChart />
          </div>
        </div>

        <div>
          <div>
            <div>Transaction History</div>
            <div>
              <div>Newest</div>
              <div>Oldest</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashbaord;
