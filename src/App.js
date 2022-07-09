import './App.css';
import React, {useState} from "react";

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Sunglasses', date: new Date(2021,2,27), price: 20.32},
    {id: 'e2', title: 'Football', date: new Date(2021,3,17), price: 43.00},
    {id: 'e3', title: 'Shoes', date: new Date(2021,4,12), price: 30.22},
    {id: 'e4', title: 'Packet', date: new Date(2020,2,6), price: 40.50},
];

const App = () => {

    const [expensesList, setExpensesList] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        const newExpense = {
            ...expense
        };

        setExpensesList( (prevExpensesList) => {
            return [...prevExpensesList, newExpense];
        });
        console.log(newExpense);
    }

    return (
        <div className="App">
            <NewExpense onAddExpenseDate={addExpenseHandler}/>
            <Expenses expenses={expensesList} />
        </div>
    );
}

export default App;
