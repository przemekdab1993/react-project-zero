import React, {useState} from "react";

import './Expenses.css';

import Card from "../UserInterface/Card";
import ExpensesFilters from "./ExpensesFilters";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('all');

    const selectFilter = (select) => {
        const selectData = {
            ...select,
        }

        setFilteredYear(selectData.year);
    }

    const expensesFilter = (expense) => {
        if (filteredYear === 'all') {
            return true;
        }
        const yearExpense = expense.date.getFullYear().toString();

        return yearExpense === filteredYear;
    }

    return (
        <Card className="expenses-panel">
            <ExpensesFilters
                onChangeFilter={selectFilter}
                selected={filteredYear}
            />
            <ExpensesList
                itemsList={props.expenses.filter(expensesFilter)}
            />
        </Card>
    );
}
export default Expenses;