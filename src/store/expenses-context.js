import React, {useState} from "react";

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Sunglasses', date: new Date(2021,2,27), price: 20.32},
    {id: 'e2', title: 'Football', date: new Date(2021,3,17), price: 43.00},
    {id: 'e3', title: 'Shoes', date: new Date(2021,4,12), price: 30.22},
    {id: 'e4', title: 'Packet', date: new Date(2020,2,6), price: 40.50},
];


const ExpensesContext = React.createContext( {
    expensesList: [],
    onAddExpenses: (expense) => {}
});

export const ExpensesContextProvider = (props) => {

    const [expensesList, setExpensesList] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        const newExpense = {
            ...expense
        };

        setExpensesList( (prevExpensesList) => {
            return [...prevExpensesList, newExpense];
        });
    }

    return (



        <ExpensesContext.Provider
        value={{
            expensesList: expensesList,
            onAddExpenses: addExpenseHandler
        }}>
            {props.children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContext;