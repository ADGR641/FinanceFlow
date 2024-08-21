import React from "react";
import "../styles/ShowAmount.css";
function ShowAmount() {
  return (
    <div className="showAmountBody">
      <div className="amountTitles">
        <div className="showAmountTitle">Available Amount</div>
        <div className="showAmountSpentTitle">Amount Spent</div>
      </div>
      <div className="showAmount">
        <div>$1000</div>
        <div className="showAmountSpent">$1000</div>
      </div>
    </div>
  );
}

export default ShowAmount;
