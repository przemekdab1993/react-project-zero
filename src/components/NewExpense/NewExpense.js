import React, {useState} from "react";

import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";
import Card from "../UserInterface/Card";
import NewExpensesNavi from "./NewExpensesNavi";

const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpenseDate(expenseData);
        hideExpenseForm();
    }

    const showExpenseForm = () => {
        setRenderContent(renderForm);

    }
    const hideExpenseForm = () => {
        setRenderContent(renderNav);
    }

    const renderNav = (<NewExpensesNavi onClickButton={showExpenseForm} />);
    const renderForm = (<ExpenseForm onSeveExpenseData={saveExpenseDateHandler} onCancelAddNewExpence={hideExpenseForm} />);

    const [renderContent, setRenderContent] = useState(renderNav);

    return (
        <Card className="new-expense form-container">
            {renderContent}
        </Card>
    );
}

export default NewExpense;