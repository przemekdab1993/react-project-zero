import React from "react";

import "./NewExpensesNavi.css";

const NewExpensesNavi = (props) => {

    const clickHandler = (event) => {
        event.preventDefault();

        props.onClickButton();
    }

    return (
        <div className="new-expense-navi">
            <button onClick={clickHandler} type="">Add New Expense</button>
        </div>
    );
}

export default NewExpensesNavi;