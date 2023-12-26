import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main askedRent={39000} utilityBill={9000} taxes={3000} />
  </React.StrictMode>
);

function Main({
  askedRent = "--",
  proposedRent = "--",
  utilityBill = "--",
  taxes = "--",
  expectedMonthlyExpense = "--",
}) {
  return (
    <div className="main-container">
      <div className="title-container">
        <p className="title">Rent Breakdown</p>
        <p className="description">
          Based on your proposal, you can see what you'll be able to expect as
          your monthly expense.
        </p>
      </div>
      <div className="rent-outer-container">
        <div className="value-row">
          <div className="field-wrapper">
            <p>Asked Rent</p>
            <img className="info-icon" src="../images/info-icon.svg" alt="" />
          </div>
          <p>$ {askedRent}</p>
        </div>
        <div className="rent-inner-container">
          <div className="value-row">
            <div className="field-wrapper">
              <p>Proposed Rent</p>
              <img className="info-icon" src="../images/info-icon.svg" alt="" />
            </div>
            <p>$ {proposedRent}</p>
          </div>
          <div className="value-row">
            <div className="field-wrapper">
              <p>Utility Bill</p>
              <img className="info-icon" src="../images/info-icon.svg" alt="" />
            </div>
            <p>$ {utilityBill}</p>
          </div>
          <div className="value-row">
            <div className="field-wrapper">
              <p>Taxes</p>
            </div>
            <p>$ {taxes}</p>
          </div>
          <div className="separator"></div>
          <div className="value-row">
            <div className="field-wrapper">
              <p>Expected Monthly Expense</p>
            </div>
            <p>$ {expectedMonthlyExpense}</p>
          </div>
        </div>
      </div>
      <div className="help-button-container">
        <button className="help-button">Need Help?</button>
      </div>
    </div>
  );
}
