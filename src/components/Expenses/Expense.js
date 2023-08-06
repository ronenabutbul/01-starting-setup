import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
const Expense = (props) => {
  const listItem = props.expenses.map((item, idx) => (
    <ExpenseItem
      key={idx}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));
  const [selectedYear, setSelectedYear] = useState(2020);
  const getSelecteDdata = (selectedData) => {
    setSelectedYear(selectedData);
  };
  return (
    <div>
      <ExpensesFilter selected={selectedYear} onSelect={getSelecteDdata} />{" "}
      <Card className="expenses">{listItem}</Card>
    </div>
  );
};
export default Expense;
