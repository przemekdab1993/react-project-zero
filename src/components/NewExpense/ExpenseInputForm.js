import React from "react";

import styles from "./ExpenseInputForm.module.css";

const ExpenseInputForm = (props) => {

    let minValue;
    let maxValue;
    let stepValue;

    if (props.type === 'date') {
        minValue = '2019-01-01';
        maxValue = '2023-12-31';
    }
    if (props.type === 'number') {
        minValue = '0.01';
        stepValue = '0.01';
    }


    return (
        <div className={`${styles["new-expense-form-group"]} ${!props.title ? styles["invalid"] : ''}`}>
            <label className={styles["new-expense-label"]} htmlFor={props.name}>{props.title}</label>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                min={minValue}
                max={maxValue}
                step={stepValue}
            />
        </div>
    );
}

export default ExpenseInputForm;