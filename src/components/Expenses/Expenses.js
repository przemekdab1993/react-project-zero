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

    return (
        <Card className="expenses-list">
            <ExpensesFilters
                onChangeFilter={selectFilter}
                selected={filteredYear}
            />

            { props.expenses.map( (expense) => {
                return (
                    <ExpenseItem
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