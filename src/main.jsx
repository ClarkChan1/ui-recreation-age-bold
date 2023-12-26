import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  return (
    <div className="main-container">
      <div className="title-container">
        <p className="title">Rent Breakdown</p>
        <p className="description">
          Based on your proposal, you can see what you'll be able to expect as
          your monthly expense.
        </p>
      </div>
    </div>
  );
}
