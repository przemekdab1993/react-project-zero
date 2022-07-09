import React, { useState } from "react";

import './ExpenseItem.css';

import ExpenseDate from "./ExpenseDate";
import Card from "../UserInterface/Card";

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={ props.date } />
                <div className="expense-item__description">
                    <h2>Title: <span>{ props.title }</span></h2>
                    <div className="expense-item__price">
                        <p>Price: <span>${ props.price }</span></p>
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;