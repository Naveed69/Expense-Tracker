import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
const AddEditExpenseForm = ({
  setIsOpen,
  setExpense,
  setBalance,
  expenseList,
  setExpenseList,
  balance,
  editId,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    date: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  const handle = (e) => {
    e.preventDefault();

    // if (Number(expsnse) <= 0) {
    //   enqueueSnackbar("Price should be greater then 0", { variant: "warning" });
    // } else if() {
    //   setExpense((prev) => Number(prev) + Number(expsnse));
    //   setIsOpen(false);
    // }
    if (Number(formData.price) <= 0) {
      enqueueSnackbar("Price should be greater then Zero", {
        variant: "warning",
      });
      return;
    }
    if (balance < Number(formData.price)) {
      enqueueSnackbar("Price should be less than or Equal to wallet balance", {
        variant: "warning",
      });
      setIsOpen(false);
      return;
    }

    setBalance((prev) => Number(prev) - Number(formData.price));

    const lastId = expenseList.length > 0 ? expenseList[0].id : 0;
    setExpenseList((prev) => [{ ...formData, id: lastId + 1 }, ...prev]);

    setFormData({
      title: "",
      category: "",
      price: "",
      date: "",
    });

    setIsOpen(false);
  };

  // setExpenses(formData.price);
  const handleChange = (e) => {
    const name = e.target.name;
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const updated = expenseList.map((item) => {
      if (item.id == editId) {
        const priceDifference = item.price - Number(formData.price);

        if (priceDifference < 0 && Math.abs(priceDifference) > balance) {
          enqueueSnackbar("Price should not exceed the wallet balance", {
            variant: "warning",
          });
          setIsOpen(false);
          return { ...item };
        }

        setBalance((prev) => Number(prev) + priceDifference);
        return { ...formData, id: editId };
      } else {
        return item;
      }
    });

    setExpenseList(updated);

    setIsOpen(false);
  };

  useEffect(() => {
    if (editId) {
      const expenseData = expenseList.find((item) => item.id == editId);

      setFormData({
        title: expenseData.title,
        category: expenseData.category,
        price: expenseData.price,
        date: expenseData.date,
      });
    }
  }, [editId]);
  return (
    <>
      <form onSubmit={editId ? handleEdit : handle}>
        <h1>{editId ? "Edit Expense" : "Add Expense"}</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="travel">Travel</option>
        </select>
        <input
          type="date"
          onChange={handleChange}
          value={formData.date}
          name="date"
          required
        />
        <button type="submit">{editId ? "Edit Expense" : "Add Expense"}</button>
        <button type="button" onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </form>
    </>
  );
};
export default AddEditExpenseForm;
