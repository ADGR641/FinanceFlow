import React from "react";
import "../styles/Dashboard.css";
import Person2Icon from "@mui/icons-material/Person2";
import LineChart from "../components/LineChart.js";

function Dashbaord() {
  return (
    <>
      <body>
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
            <div className="analysisChart">
              <LineChart />
            </div>
          </div>

          <div className="transactionHistorySection">
            <div className="transactionHistoryTopSide">
              <div>Transaction History</div>
              <div className="transactionHistorySorting">
                <div className="transactionHistoryNewest">Newest</div>
                <div className="transactionHistoryOldests">Oldest</div>
              </div>
            </div>
            <div className="transactionHistoryBottomSide">
              <div>
                <div className="transactionHistorytitle">Transaction</div>
                <ul>
                  <li>Upwork</li>
                  <li>Netflix</li>
                  <li>Spotify</li>
                </ul>
              </div>

              <div>
                <div className="transactionHistorytitle">Type</div>
                <ul>
                  <li>Freelancing</li>
                  <li>Entertainment</li>
                  <li>Subscription</li>
                </ul>
              </div>

              <div>
                <div className="transactionHistorytitle">Amount</div>
                <ul>
                  <li>$150</li>
                  <li>$60</li>
                  <li>$10</li>
                </ul>
              </div>

              <div>
                <div className="transactionHistorytitle">Date</div>
                <ul>
                  <li>14 Aug, 2023</li>
                  <li>10 Aug, 2023</li>
                  <li>29 July, 2023</li>
                </ul>
              </div>

              <div>
                <div className="transactionHistorytitle">Status</div>
                <ul>
                  <li>Credited</li>
                  <li>Debited</li>
                  <li>Debited</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Dashbaord;
