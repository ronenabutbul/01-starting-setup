import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const TitleChaingHendler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const AmountChaingHendler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateChaingHendler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={TitleChaingHendler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            nim="0.01"
            step="0.01"
            onChange={AmountChaingHendler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            onChange={DateChaingHendler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;