import React, {useContext, useState} from "react";

import styles from './Expenses.module.css';

import Card from "../UserInterface/Card";
import ExpensesFilters from "./ExpensesFilters";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesContext from "../../store/expenses-context";

const Expenses = () => {

    const [filteredYear, setFilteredYear] = useState('all');

    const expensesCtx = useContext(ExpensesContext);

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

    const expensesFiltered = expensesCtx.expensesList.filter(expensesFilter);

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