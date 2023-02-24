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
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        setFormIsValid(enteredUserEmail.includes('@') && enteredUserEmail.length >= 6 && enteredUserPassword.length >= 6);
    },[enteredUserEmail, enteredUserPassword]);

    const inputChangeHandler = (event) => {
        const inputName = event.target.name;

        if (inputName === 'userEmail') {
            setEnteredUserEmail(prevState => event.target.value);
            setEmailIsValid(prevState => true);
        }
        if (inputName === 'userPassword') {
            setEnteredUserPassword(prevState => event.target.value);
            setPasswordIsValid(prevState => true);
        }
    }

    const inputBlurHandler = (event) => {
        const inputName = event.target.name;

        if (inputName === 'userEmail') {
            if (!enteredUserEmail.includes('@') || enteredUserEmail.length < 6 ) {
                setEmailIsValid(prevState => false);
            } else {
                setEmailIsValid(prev => true);
            }
        }
        if (inputName === 'userPassword') {
            if (enteredUserPassword.length < 6 ) {
                setPasswordIsValid(prevState => false);
            } else {
                setPasswordIsValid(prevState => true);
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
                <label className={`${styles["login-form-label"]} ${!emailIsValid ? styles["invalid"] : ''}`} htmlFor="userEmail">E-mail:</label>
                <input
                    className={`${!emailIsValid ? styles["invalid"] : ''}`}
                    type="text"
                    name="userEmail"
                    value={enteredUserEmail}
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler}
                />
            </div>
            <div className={`${styles["login-form-group"]}`} >
                <label className={`${styles["login-form-label"]} ${!passwordIsValid ? styles["invalid"] : ''}`} htmlFor="userPassword">Password:</label>
                <input
                    className={`${!passwordIsValid ? styles["invalid"] : ''}`}
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