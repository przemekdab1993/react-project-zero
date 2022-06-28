import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";
import Card from "../UserInterface/Card";

const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpenseDate(expenseData);
    }

    return (
        <Card className="new-expense form-container">
            <ExpenseForm onSeveExpenseData={saveExpenseDateHandler} />
        </Card>
    );
}

export default NewExpense;