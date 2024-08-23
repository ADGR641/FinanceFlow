import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="showAmount">
        <div className="availableAmount">
          <div>Picture</div>
          <div className="availableAmountTitle">Available Amount</div>
          <div>1000$</div>
        </div>
        <div className="showTotalSpend">
          <div>Picture</div>
          <div>Total Spent</div>
          <div>1000$</div>
        </div>
        <div className="showBudgetGoal">
          <div>Picture</div>
          <div>Budget Goal</div>
          <div>1000$</div>
        </div>
      </div>

      <div className="showExpensesAllocation">
        <a>Expense</a>
        <div>Graphs</div>
        <div>
          <a></a>
        </div>
      </div>
    </>
  );
}

export default Home;
