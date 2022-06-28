import './Expenses.css';

import ExpenseItem from "./ExpenseItem";
import Card from "../UserInterface/Card";
import ExpensesFilters from "./ExpensesFilters";

const Expenses = (props) => {

    const selectYear = (select) => {
        const selectData = {
            ...select,
        }
        console.log(selectData.year);
    }

    return (
        <Card className="expenses-list">
            <ExpensesFilters onSetSelectYear={selectYear}></ExpensesFilters>
            <ExpenseItem
                title={props.expenses[0].title}
                date={props.expenses[0].date}
                price={props.expenses[0].price}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                date={props.expenses[1].date}
                price={props.expenses[1].price}
            />
            <ExpenseItem
                title={props.expenses[2].title}
                date={props.expenses[2].date}
                price={props.expenses[2].price}
            />
        </Card>
    );
}
export default Expenses;