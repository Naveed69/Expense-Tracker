import { useEffect, useState } from "react";
import "./heropage.css";
import AddModal from "./modal/AddbalanceModal";
import AddBalanceForm from "./Forms/AddBalanceForm";
import AddEditExpenseForm from "./Forms/AddEditExpenseForm";
const Heropage = () => {
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);

  const [addbalanceIsopen, setAddBalanceIopen] = useState(false);
  const [addExpenseIsopen, setAddExpenseIopen] = useState(false);
  const [isMounted, setMounted] = useState(false);
  // const localBalance = window.localStorage({ balance: 5000, expense: 0 });

  useEffect(() => {
    const localBalance = localStorage.getItem("balance");

    if (localBalance) {
      setBalance(localBalance);
    } else {
      setBalance(5000);
      localStorage.setItem("balance", 5000);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) localStorage.setItem("balance", balance);
  }, [balance]);

  
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
