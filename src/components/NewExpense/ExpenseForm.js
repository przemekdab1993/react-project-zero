import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // //ALTERNATIVE
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredPrice: '',
    //     enteredDate: ''
    // });

    const inputChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        console.log(name + " changed!");

        switch (name) {
            case 'title':
                setEnteredTitle(value);
                // //ALTERNATIVE
                // setUserInput((prevState) => {
                //     return {
                //         ...prevState,
                //         enteredTitle: value
                //     }
                // });
                break;

            case 'price':
                setEnteredPrice(value);
                // //ALTERNATIVE
                // setUserInput((prevState) => {
                //     return {
                //         ...prevState,
                //         enteredPrice: value
                //     }
                // });
                break;

            case 'date':
                setEnteredDate(value);
                // ALTERNATIVE
                // setUserInput((prevState) => {
                //     return {
                //         ...prevState,
                //         enteredDate: value
                //     }
                // });
                break;

            default:
                break;
        }
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredPrice !== '' && enteredTitle !== '' && enteredDate !== '') {

            const expenseData = {
                title: enteredTitle,
                price: +enteredPrice,
                date: new Date(enteredDate)
            }

            props.onSeveExpenseData(expenseData);

            setEnteredTitle('');
            setEnteredPrice('');
            setEnteredDate('');
        }
    }

    const cancelHandler = () => {

        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');

        props.onCancelAddNewExpence();
    }


    return (
        <form onSubmit={submitHandler} className="new-expense-form">
            <div className="form-group new-expense-form-group">
                <label className="new-expense-label" htmlFor="label-title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={enteredTitle}
                    onChange={inputChangeHandler}
                    required={true}
                />
            </div>
            <div className="form-group new-expense-form-group">
                <label className="new-expense-label" htmlFor="label-price">Price</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    name="price"
                    value={enteredPrice}
                    onChange={inputChangeHandler}
                    required={true}
                />
            </div>
            <div className="form-group new-expense-form-group">
                <label className="new-expense-label" htmlFor="label-date">Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    name="date"
                    required={true}
                    value={enteredDate}
                    onChange={inputChangeHandler}
                />
            </div>

            <button type="submit" >Add Expense</button>
            <button onClick={cancelHandler} type="button" >Cancel</button>
        </form>
    );
}

export default ExpenseForm;