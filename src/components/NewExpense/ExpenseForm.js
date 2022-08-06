import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [validFormInput, setValidFormInput] = useState({
        title: true,
        price: true,
        date: true
    });


    const inputChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        console.log(name + " changed!");

        switch (name) {
            case 'title':
                setEnteredTitle(value);

                setValidFormInput( (prevValidFormInput) => {
                    return {
                        ...prevValidFormInput,
                        title: true
                    }
                });
                break;

            case 'price':
                setEnteredPrice(value);

                setValidFormInput( (prevValidFormInput) => {
                    return {
                        ...prevValidFormInput,
                        price: true
                    }
                });
                break;

            case 'date':
                setEnteredDate(value);

                setValidFormInput( (prevValidFormInput) => {
                    return {
                        ...prevValidFormInput,
                        date: true
                    }
                });

                break;

            default:
                break;
        }
    }
    
    const submitHandler = (event) => {

        let allValid = true;

        event.preventDefault();

        if (enteredTitle.trim().length === 0) {
            allValid = false;

            setValidFormInput( (prevValidFormInput) => {
                return {
                    ...prevValidFormInput,
                    title: false
                }
            });
        }

        if (enteredPrice.trim().length === 0) {
            allValid = false;

            setValidFormInput( (prevValidFormInput) => {
                return {
                    ...prevValidFormInput,
                    price: false
                }
            });
        }

        if (enteredDate.trim().length === 0) {
            allValid = false;

            setValidFormInput( (prevValidFormInput) => {
                return {
                    ...prevValidFormInput,
                    date: false
                }
            });
        }

        if(!allValid) {
            return;
        }

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

    const cancelHandler = () => {

        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');

        props.onCancelAddNewExpence();
    }


    return (
        <form onSubmit={submitHandler} className="new-expense-form">
            <div className={`form-group new-expense-form-group ${!validFormInput.title ? 'invalid' : ''}`} >
                <label className="new-expense-label" htmlFor="label-title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={enteredTitle}
                    // required={true}
                    onChange={inputChangeHandler}


                />
            </div>
            <div className={`form-group new-expense-form-group ${!validFormInput.price ? 'invalid' : ''}`} >
                <label className="new-expense-label" htmlFor="label-price">Price</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    name="price"
                    value={enteredPrice}
                    // required={true}
                    onChange={inputChangeHandler}
                />
            </div>
            <div className={`form-group new-expense-form-group ${!validFormInput.date ? 'invalid' : ''}`}>
                <label className="new-expense-label" htmlFor="label-date">Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    name="date"
                    // required={true}
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