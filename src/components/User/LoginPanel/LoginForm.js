import React, {useEffect, useState} from "react";

import styles from "./LoginForm.module.css";

const USERDEFAULTDATA = {
    firstName: 'Jacek',
    secondName: 'Duda',
    avatar: 'red'
};

const LoginForm = (props) => {

    const [enteredUserEmail, setEnteredUserEmail] = useState('');
    const [enteredUserPassword, setEnteredUserPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect( () => {
        const checkValidEmail = setTimeout(() => {
            setFormIsValid(enteredUserEmail.includes('@') && enteredUserEmail.length >= 6 && enteredUserPassword.length >= 6);
            if (emailIsValid !== undefined || enteredUserEmail.length > 0) {
                setEmailIsValid(enteredUserEmail.includes('@') && enteredUserEmail.length >= 6);
            }
            if (passwordIsValid !== undefined || enteredUserPassword.length > 0) {
                setPasswordIsValid(enteredUserPassword.length >= 6);
            }
        },600);

        return () => {
            clearTimeout(checkValidEmail);
        }
    }, [enteredUserEmail, enteredUserPassword]);


    const inputChangeHandler = (event) => {
        const inputName = event.target.name;

        if (inputName === 'userEmail') {
            setEnteredUserEmail(prevState => event.target.value);
        }
        if (inputName === 'userPassword') {
            setEnteredUserPassword(prevState => event.target.value);
        }
    }

    const inputBlurHandler = (event) => {
        const inputName = event.target.name;

        if (inputName === 'userEmail') {
            if (enteredUserEmail.length === 0 ) {
                setEmailIsValid(prevState => false);
            }
        }
        if (inputName === 'userPassword') {
            if (enteredUserPassword.length === 0 ) {
                setPasswordIsValid(prevState => false);
            }
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (formIsValid) {
            return props.onUserLogin(USERDEFAULTDATA);
        }
    }

    return (
        <form onSubmit={submitHandler} className={styles["login-form"]}>
            <div className={`${styles["login-form-group"]}`} >
                <label className={`${styles["login-form-label"]} ${(emailIsValid === false) ? styles["invalid"] : ''}`} htmlFor="userEmail">E-mail:</label>
                <input
                    className={`${(emailIsValid === false) ? styles["invalid"] : ''}`}
                    type="text"
                    name="userEmail"
                    value={enteredUserEmail}
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler}
                />
            </div>
            <div className={`${styles["login-form-group"]}`} >
                <label className={`${styles["login-form-label"]} ${(passwordIsValid === false) ? styles["invalid"] : ''}`} htmlFor="userPassword">Password:</label>
                <input
                    className={`${(passwordIsValid === false) ? styles["invalid"] : ''}`}
                    type="password"
                    name="userPassword"
                    value={enteredUserPassword}
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler}
                />
            </div>
            <button className={`${(!formIsValid) ? styles["unactive"]: ''}`} type="submit" >Log in</button>
        </form>
    );
}

export default LoginForm;