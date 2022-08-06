import React from "react";

import styles from "./ExpensesList.module.css";

import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {

    if (props.itemsList.length <= 0) {
        return (
            <div className={styles["info-message"]}>No expenses in selected filters.</div>
        )
    }
    return (
        <ul className={styles["expenses-list"]}>
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