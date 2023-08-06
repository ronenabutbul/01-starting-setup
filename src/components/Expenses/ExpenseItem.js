//import React, { useState } from "react";
import "./ExpenseItem.css";
import DateComponent from "./DateComponent";
import Card from "../UI/Card";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHendler = () => {
    setTitle("chinged!!!");
  };
  return (
    <Card className="expense-item">
      <DateComponent date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHendler}>Chainge title</button>
    </Card>
  );
};
export default ExpenseItem;
