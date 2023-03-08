import React, { useState } from "react";

import styles from './ExpenseForm.module.css'
import ExpenseInputForm from "./ExpenseInputForm";

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
        <form onSubmit={submitHandler} className={styles["new-expense-form"]}>

            <ExpenseInputForm
                type="text"
                name="title"
                title="Title:"
                value={enteredTitle}
                onChange={inputChangeHandler}
                onBlur={() => {}}
            />
            <ExpenseInputForm
                type="number"
                name="price"
                title="Price:"
                value={enteredPrice}
                onChange={inputChangeHandler}
                onBlur={() => {}}
            />
            <ExpenseInputForm
                type="date"
                name="date"
                title="Date:"
                value={enteredDate}
                onChange={inputChangeHandler}
                onBlur={() => {}}
            />

            <button type="submit" >Add Expense</button>
            <button onClick={cancelHandler} type="button" >Cancel</button>
        </form>
    );
}

export default ExpenseForm;