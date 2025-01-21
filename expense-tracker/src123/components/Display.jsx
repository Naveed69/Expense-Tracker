import "./Display.css";
import Heropage from "./Heropage";
import React, { useState } from "react";
import RecentTrasactions from "./RecentTransaction/Recenttransaction";
import TopExpenses from "./TopExpenses/TopExpenses";

const Display = () => {
  {
    /*Balance and expense price state */
  }
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);

  {
    /* state for Condition checking for Modal and updating values to balance and expense */
  }
  const [addbalanceIsopen, setAddBalanceIopen] = useState(false);
  const [addExpenseIsopen, setAddExpenseIopen] = useState(false);
  const [isMounted, setMounted] = useState(false);

  {
    /* Expense List state */
  }

  const [expenseList, setExpenseList] = useState([]);
  const [categorySpends, setCategorySpends] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });
  const [categoryCount, setCategoryCount] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  return (
    <>
      <h2 style={{ color: "#FFFFFF" }}>Expense Tracker</h2>
      <Heropage
        balance={balance}
        setBalance={setBalance}
        expense={expense}
        setExpense={setExpense}
        addbalanceIsopen={addbalanceIsopen}
        setAddBalanceIopen={setAddBalanceIopen}
        addExpenseIsopen={addExpenseIsopen}
        setAddExpenseIopen={setAddExpenseIopen}
        isMounted={isMounted}
        setMounted={setMounted}
        expenseList={expenseList}
        setExpenseList={setExpenseList}
        setCategorySpends={setCategorySpends}
        setCategoryCount={setCategoryCount}
      />

      <div className="mainpage row mt-3">
        <RecentTrasactions
          transactions={expenseList}
          editTransaction={setExpenseList}
          balance={balance}
          setBalance={setBalance}
        />
        <TopExpenses />
      </div>
    </>
  );
};
export default Display;
