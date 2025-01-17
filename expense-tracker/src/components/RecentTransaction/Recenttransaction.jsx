import { useEffect, useState } from "react";
import AddEditExpenseForm from "../Forms/AddEditExpenseForm";
import AddModal from "../modal/AddbalanceModal";
import TransactionCard from "../TransactionCard/TransactionCard";
const RecentTrasactions = ({
  transactions,
  editTransaction,
  balance,
  setBalance,
}) => {
  const [isEditTransaction, setIsEditTransaction] = useState(false);
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const maxRecords = 3;
  const [totalPages, setTotalPages] = useState(0);
  const [editId, setEditId] = useState(0);
  useEffect(() => {
    const startIndex = (currentPage - 1) * maxRecords;
    const endIndex = Math.min(currentPage * maxRecords, transactions.length);

    setCurrentTransactions([...transactions].slice(startIndex, endIndex));
    setTotalPages(Math.ceil(transactions.length / maxRecords));
  }, [currentPage, transactions]);

  const handleDelete = (id) => {
    const item = transactions.find((i) => i.id == id);
    const price = Number(item.price);
    setBalance((prev) => Number(prev) + price);

    editTransaction((prev) => prev.filter((item) => item.id != id));
  };

  const handleEdit = (id) => {
    setEditId(id);
    setIsEditTransaction(true);
  };

  useEffect(() => {
    if (totalPages < currentPage && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [totalPages]);
  return (
    <>
      <div className="col-md-7">
        <h2 style={{ color: "#FFFFFF" }}>
          <i>Recent Transactions</i>
        </h2>
        <div className="transactions">
          {transactions.length ? (
            <div>
              {currentTransactions.map((transaction) => (
                <TransactionCard
                  details={transaction}
                  key={transaction.id}
                  handleDelete={() => handleDelete(transaction.id)}
                  handleEdit={() => handleEdit(transaction.id)}
                />
              ))}
            </div>
          ) : (
            <div>No Transactions!</div>
          )}
        </div>
      </div>
      <AddModal isOpen={isEditTransaction} setIsOpen={setIsEditTransaction}>
        <AddEditExpenseForm
          editId={editId}
          expenseList={transactions}
          setExpenseList={editTransaction}
          setIsOpen={setIsEditTransaction}
          balance={balance}
          setBalance={setBalance}
        />
      </AddModal>
    </>
  );
};

export default RecentTrasactions;
