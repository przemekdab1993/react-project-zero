import React from "react";

import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {

    if (props.itemsList.length <= 0) {
        return (
            <div className="info-message">No expenses in selected filters.</div>
        )
    }
    return (
        <ul className="expenses-list">
            {props.itemsList.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        price={expense.price}
                    />
                )
            })
            }
        </ul>
    );

}

export default ExpensesList;