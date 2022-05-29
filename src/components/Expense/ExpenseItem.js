import React, { useState } from "react";

import './ExpenseItem.css';

import ExpenseDate from "./ExpenseDate";
import Card from "../UserInterface/Card";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
      console.log('Andrzej');
      setTitle('Andrzeju!!!');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={ props.date } />
            <div className="expense-item__description">
                <h2>Title: <span>{ title }</span></h2>
                <div className="expense-item__price">
                    <p>Price: <span>${ props.price }</span></p>
                </div>
            </div>
            <button onClick={clickHandler}>Chenge Title</button>
        </Card>
    );
}

export default ExpenseItem;