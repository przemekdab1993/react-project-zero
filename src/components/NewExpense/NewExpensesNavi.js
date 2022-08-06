import React from "react";

import styles from "./NewExpensesNavi.module.css";

const NewExpensesNavi = (props) => {

    const clickHandler = (event) => {
        event.preventDefault();

        props.onClickButton();
    }

    return (
        <div className={styles["new-expense-navi"]}>
            <button onClick={clickHandler} type="">Add New Expense</button>
        </div>
    );
}

export default NewExpensesNavi;