import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = () => {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredPrice, setEnteredPrice] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
    })

    const inputChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        console.log(name + " changed!");

        switch (name) {
            case 'title':
                //setEnteredTitle(value);
                setUserInput({
                    ...userInput,
                    enteredTitle: value
                });
                break;

            case 'price':
                //setEnteredPrice(value);
                setUserInput({
                    ...userInput,
                    enteredPrice: value
                });
                break;

            case 'date':
                //setEnteredDate(value);
                setUserInput({
                    ...userInput,
                    enteredDate: value
                });
                break;

            default:
                break;
        }
        //console.log(userInput);
    }


    return (
        <form className="new-expense-form">
            <div className="form-group new-expense-form-group">
                <label className="new-expense-label" htmlFor="label-title">Title</label>
                <input type="text" name="title" onChange={inputChangeHandler}/>
            </div>
            <div className="form-group new-expense-form-group">
                <label className="new-expense-label" htmlFor="label-price">Price</label>
                <input type="number" min="0.01" step="0.01" name="price" onChange={inputChangeHandler} />
            </div>
            <div className="form-group new-expense-form-group">
                <label className="new-expense-label" htmlFor="label-date">Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" name="date" onChange={inputChangeHandler} />
            </div>

            <button type="submit" >Add Expense</button>
        </form>
    );
}

export default ExpenseForm;