import React, {useContext, useState} from "react";

import styles from'./NewExpense.module.css';

import ExpenseForm from "./ExpenseForm";
import Card from "../UserInterface/Card";
import NewExpensesNavi from "./NewExpensesNavi";
import ExpensesContext from "../../store/expenses-context";

const NewExpense = () => {

    const expensesCtx = useContext(ExpensesContext);

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        expensesCtx.onAddExpenses(expenseData);
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
        <Card className={styles["new-expense"]}>
            {renderContent}
        </Card>
    );
}

export default NewExpense;