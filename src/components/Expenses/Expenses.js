import React, {useState} from "react";

import './Expenses.css';

import ExpenseItem from "./ExpenseItem";
import Card from "../UserInterface/Card";
import ExpensesFilters from "./ExpensesFilters";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('all');

    const selectFilter = (select) => {
        const selectData = {
            ...select,
        }

        setFilteredYear(selectData.year);
        console.log(selectData.year);
    }

    const expensesFilter = (expense) => {
        if (filteredYear === 'all') {
            return true;
        }
        const yearExpense = expense.date.getFullYear().toString();

        return yearExpense === filteredYear;
    }

    const selectFilteredExpenses = props.expenses.filter(expensesFilter);

    return (
        <Card className="expenses-list">
            <ExpensesFilters
                onChangeFilter={selectFilter}
                selected={filteredYear}
            />
            { (selectFilteredExpenses.length <= 0) ? (<div>Brak wpisów w wybranym filtrze.</div>) : false }

            { selectFilteredExpenses.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        price={expense.price}
                    />
                )
            }) }
        </Card>
    );
}
export default Expenses;