import React, {useState} from "react";

import styles from './Expenses.module.css';

import Card from "../UserInterface/Card";
import ExpensesFilters from "./ExpensesFilters";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

    const expensesFiltered = props.expenses.filter(expensesFilter);

    return (
        <Card className={styles["expenses-panel"]}>
            <ExpensesFilters
                onChangeFilter={selectFilter}
                selected={filteredYear}
            />
            <ExpensesChart expenses={expensesFiltered} />
            <ExpensesList
                itemsList={expensesFiltered}
            />
        </Card>
    );
}
export default Expenses;