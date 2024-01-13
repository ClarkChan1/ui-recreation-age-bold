import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Info from "./info";
import formatNumber from "../utils/formatNumber";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main askedRent={39000} utilityBill={9000} taxes={3000} />
    <aside className="background-diagonal"></aside>
    <aside className="background-green"></aside>
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
    <main className="main-container">
      <header className="title-container">
        <p className="title">Rent Breakdown</p>
        <p className="description">
          Based on your proposal, you can see what you'll be able to expect as
          your monthly expense.
        </p>
      </header>
      <aside id="coin-icon">
        <p>$</p>
      </aside>
      <section className="rent-outer-container">
        <article className="value-row">
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
          <p>
            <span style={{ color: "#949494" }}>$</span>{" "}
            {askedRent == "--" ? askedRent : formatNumber(askedRent)}
          </p>
        </article>
        <section className="rent-inner-container">
          <article className="value-row">
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
              <span style={{ color: "#00994d" }}>$</span>{" "}
              {proposedRent == "--" ? proposedRent : formatNumber(proposedRent)}
            </p>
          </article>
          <article className="value-row">
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
            <p>
              <span style={{ color: "#949494" }}>$</span>{" "}
              {utilityBill == "--" ? utilityBill : formatNumber(utilityBill)}
            </p>
          </article>
          <article className="value-row">
            <div className="field-wrapper">
              <p>Taxes</p>
            </div>
            <p>
              <span style={{ color: "#949494" }}>$</span>{" "}
              {taxes == "--" ? taxes : formatNumber(taxes)}
            </p>
          </article>
          <div className="separator"></div>
          <article className="value-row">
            <div className="field-wrapper">
              <p>Expected Monthly Expense</p>
            </div>
            <p>
              <span style={{ fontWeight: "bold" }}>$</span>{" "}
              {expectedMonthlyExpense == "--"
                ? expectedMonthlyExpense
                : formatNumber(expectedMonthlyExpense)}
            </p>
          </article>
        </section>
      </section>
      <article className="help-button-container">
        <button className="help-button">Need Help?</button>
      </article>
    </main>
  );
}
