//import React, { useState } from "react";
import "./ExpenseItem.css";
import DateComponent from "./DateComponent";
import Card from "../UI/Card";
import { useState } from "react";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <DateComponent date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
};
export default ExpenseItem;
