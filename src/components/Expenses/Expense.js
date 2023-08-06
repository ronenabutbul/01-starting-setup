import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
const Expense = (props) => {
  const listItem = props.expenses.map((item, idx) => (
    <ExpenseItem
      key={idx}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));
  return <Card className="expenses">{listItem}</Card>;
};
export default Expense;
