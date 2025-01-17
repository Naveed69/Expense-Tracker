import { useState } from "react";
import { useSnackbar } from "notistack";
const AddBalanceForm = ({ setIsOpen, setBalance }) => {
  const [income, setincome] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const addbaance = (e) => {
    e.preventDefault();
    if (Number(income) <= 0) {
      enqueueSnackbar("Income should be greater then 0", {
        variant: "warning",
      });
    } else {
      setBalance((prev) => Number(prev) + Number(income));
      setIsOpen(false);
    }
  };
  return (
    <>
      <form onSubmit={(e) => addbaance(e)}>
        <h1>Add Balance</h1>
        <input
          type="text"
          value={income}
          onChange={(e) => setincome(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add Balance</button>
        <button type="button" onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </form>
    </>
  );
};
export default AddBalanceForm;
