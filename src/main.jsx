import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Info from "./info";
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
      <div id="coin-icon">
        <p>$</p>
      </div>
      <div className="rent-outer-container">
        <div className="value-row">
          <div className="field-wrapper">
            <p>Asked Rent</p>
            <img className="info-icon" src="../images/info-icon.svg" alt="" />
            <Info
              infoTitle={"Asked Rent"}
              infoText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <p>$ {askedRent}</p>
        </div>
        <div className="rent-inner-container">
          <div className="value-row">
            <div className="field-wrapper">
              <p>Proposed Rent</p>
              <img className="info-icon" src="../images/info-icon.svg" alt="" />
              <Info
                infoTitle={"Proposed Rent"}
                infoText={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              />
            </div>
            <p>
              {" "}
              <span style={{ color: "#00994d" }}>$</span> {proposedRent}
            </p>
          </div>
          <div className="value-row">
            <div className="field-wrapper">
              <p>Utility Bill</p>
              <img className="info-icon" src="../images/info-icon.svg" alt="" />
              <Info
                infoTitle={"Utility Bill"}
                infoText={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              />
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
            <p>
              <span style={{ fontWeight: "bold" }}>$</span>{" "}
              {expectedMonthlyExpense}
            </p>
          </div>
        </div>
      </div>
      <div className="help-button-container">
        <button className="help-button">Need Help?</button>
      </div>
    </div>
  );
}
