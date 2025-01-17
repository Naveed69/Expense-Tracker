import { useEffect, useState } from "react";
import "./heropage.css";
import AddModal from "./modal/AddbalanceModal";
import AddBalanceForm from "./Forms/AddBalanceForm";
import AddEditExpenseForm from "./Forms/AddEditExpenseForm";
const Heropage = ({
  balance,
  setBalance,
  expense,
  setExpense,
  addbalanceIsopen,
  setAddBalanceIopen,
  addExpenseIsopen,
  setAddExpenseIopen,
  isMounted,
  setMounted,
  expenseList,
  setExpenseList,
  setCategorySpends,
  setCategoryCount,
}) => {
  // const localBalance = window.localStorage({ balance: 5000, expense: 0 });

  useEffect(() => {
    const localBalance = localStorage.getItem("balance");
    if (localBalance) {
      setBalance(localBalance);
    } else {
      setBalance(5000);
      localStorage.setItem("balance", 5000);
    }

    setExpenseList(JSON.parse(localStorage.getItem("expenses")) || []);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("balance", balance);
    }
  }, [balance]);

  useEffect(() => {
    if (expenseList.length > 0 || isMounted) {
      localStorage.setItem("expenses", JSON.stringify(expenseList));
    }

    if (expenseList.length > 0) {
      setExpense(
        expenseList.reduce(
          (accumulator, currentValue) =>
            accumulator + Number(currentValue.price),
          0
        )
      );
    } else {
      setExpense(0);
    }

    let foodSpends = 0,
      entertainmentSpends = 0,
      travelSpends = 0;
    let foodCount = 0,
      entertainmentCount = 0,
      travelCount = 0;

    expenseList.forEach((item) => {
      if (item.category == "food") {
        foodSpends += Number(item.price);
        foodCount++;
      } else if (item.category == "entertainment") {
        entertainmentSpends += Number(item.price);
        entertainmentCount++;
      } else if (item.category == "travel") {
        travelSpends += Number(item.price);
        travelCount++;
      }
    });

    setCategorySpends({
      food: foodSpends,
      travel: travelSpends,
      entertainment: entertainmentSpends,
    });

    setCategoryCount({
      food: foodCount,
      travel: travelCount,
      entertainment: entertainmentCount,
    });
  }, [expenseList]);

  return (
    <>
      <div className="heropage">
        <div className="balance">
          <div>
            Wallet Balance:<span style={{ color: "#9DFF5B" }}>$ {balance}</span>
          </div>
          <button
            className="addbalance"
            onClick={() => setAddBalanceIopen(true)}
          >
            + Add Income
          </button>
        </div>
        <div className="expense">
          <div className="balance">
            <div>
              Expenses:<span style={{ color: "#F4BB4A" }}>$ {expense}</span>
            </div>
            <button
              className="addexpense"
              onClick={() => setAddExpenseIopen(true)}
            >
              + Add Expense
            </button>
          </div>
        </div>
        <div className="piachart">
          <div className="chart"></div>
          <div className="bars">
            <span style={{ marginRight: "10px" }}>
              <div className="food"></div>
              Food
            </span>
            <span style={{ marginRight: "10px" }}>
              <div className="entertainment"></div>
              Entertainment
            </span>
            <span style={{ marginRight: "10px" }}>
              <div className="travel"></div>
              Travel
            </span>
          </div>
        </div>
      </div>

      <AddModal isOpen={addExpenseIsopen} setIsOpen={setAddExpenseIopen}>
        <AddEditExpenseForm
          setIsOpen={setAddExpenseIopen}
          setExpense={setExpense}
          setBalance={setBalance}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          balance={balance}
        />
      </AddModal>

      <AddModal isOpen={addbalanceIsopen} setIsOpen={setAddBalanceIopen}>
        <AddBalanceForm
          setIsOpen={setAddBalanceIopen}
          setBalance={setBalance}
        />
      </AddModal>
    </>
  );
};

export default Heropage;
