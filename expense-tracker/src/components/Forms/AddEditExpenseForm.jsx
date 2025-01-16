import { useSnackbar } from "notistack";
import { useState } from "react";
const AddEditExpenseForm = ({ setIsOpen, setExpense, setBalance }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [expsnse, setExpenses] = useState("");
  const handle = (e) => {
    e.preventDefault();

    if (Number(expsnse) <= 0) {
      enqueueSnackbar("Price should be greater then 0", { variant: "warning" });
    } else {
      setExpense((prev) => Number(prev) + Number(expsnse));
      setBalance((prev) => Number(prev) - Number(expsnse));
      setIsOpen(false);
    }
  };
  return (
    <>
      <form onSubmit={(e) => handle(e)}>
        <input type="text" placeholder="Title" />
        <input
          type="number"
          name="amount"
          onChange={(e) => setExpenses(e.target.value)}
          placeholder="Amount"
        />
        <select>
          <option>Food</option>
          <option>Entertainment</option>
          <option>Travel</option>
        </select>
        <input type="date" />
        <button type="submit">Add Expense</button>
        <button type="button" onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </form>
    </>
  );
};
export default AddEditExpenseForm;
