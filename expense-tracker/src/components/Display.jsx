import "./Display.css";
import Heropage from "./Heropage";
import React from "react";

const Display = () => {
  return (
    <>
      <h2 style={{ color: "#FFFFFF" }}>Expense Tracker</h2>
      <Heropage />
      <div className="mainpage row mt-3">
        <div className="col-md-7">
          <h2 style={{ color: "#FFFFFF" }}>Recent Transactions</h2>
          <div className="transactions">No Transactions!</div>
        </div>
        <div className="col-md-4">
          <h2 style={{ color: "#FFFFFF" }}>Top Expenses</h2>
          <div className="expenses"></div>
        </div>
      </div>
    </>
  );
};
export default Display;
