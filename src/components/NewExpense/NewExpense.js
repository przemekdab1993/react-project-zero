import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";
import Card from "../UserInterface/Card";

const NewExpense = () => {
    return (
        <Card className="new-expense form-container">
            <ExpenseForm/>
        </Card>
    );
}

export default NewExpense;