import React, { useState } from "react";

import styles from './ExpenseItem.module.css';

import ExpenseDate from "./ExpenseDate";
import Card from "../UserInterface/Card";

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className={styles["expense-item"]}>
                <ExpenseDate date={ props.date } />
                <div className={styles["expense-item__description"]}>
                    <h2>Title: <span>{ props.title }</span></h2>
                    <div className={styles["expense-item__price"]}>
                        <p>Price: <span>${ props.price }</span></p>
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;