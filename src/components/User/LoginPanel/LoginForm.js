import React, {useReducer, useEffect, useState} from "react";

import styles from "./LoginForm.module.css";

const USERDEFAULTDATA = {
    firstName: 'Jacek',
    secondName: 'Duda',
    avatar: 'red'
};

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {value: action.val, isValid: state.isValid};
    }

    if (action.type === "CHECK_VALID") {
        return {value: state.value, isValid: (state.value.length >= 6 && state.value.includes("@"))};
    }

    return { value: '', isValid: undefined};
}

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {value: action.val, isValid: state.isValid};
    }

    if (action.type === "CHECK_VALID") {
        return {value: state.value, isValid: (state.value.length >= 6) };
    }

    return { value: '', isValid: undefined};
}

const LoginForm = (props) => {

    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: undefined});
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: undefined});

    const {value: emailValue} = emailState;
    const {value: passwordValue} = passwordState;
    const {isValid: emailIsValid} = emailState;
    const {isValid: passwordIsValid} = passwordState;


    useEffect( () => {
        const checkValidEmail = setTimeout(() => {

            if (emailIsValid !== undefined || emailValue.length > 0) {
                dispatchEmail({type: "CHECK_VALID"});
            }
            if (passwordIsValid !== undefined || passwordValue.length > 0) {
                dispatchPassword({type: "CHECK_VALID"});
            }
        },800);

        return () => {
            clearTimeout(checkValidEmail);
        }
    }, [emailValue, passwordValue]);

    useEffect( () => {

        setFormIsValid(emailIsValid && passwordIsValid);

    }, [emailIsValid, passwordIsValid]);


    const inputChangeHandler = (event) => {
        const inputName = event.target.name;

        if (inputName === 'userEmail') {
            dispatchEmail({type: "USER_INPUT", val: event.target.value});
        }
        if (inputName === 'userPassword') {
            dispatchPassword({type: "USER_INPUT", val:event.target.value});
        }
    }

    const inputBlurHandler = (event) => {
        const inputName = event.target.name;

        if (inputName === 'userEmail') {
            dispatchEmail({type: "CHECK_VALID"})
        }
        if (inputName === 'userPassword') {
            dispatchPassword({type: "CHECK_VALID"});
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
                <label className={`${styles["login-form-label"]} ${(emailState.isValid === false) ? styles["invalid"] : ''}`} htmlFor="userEmail">E-mail:</label>
                <input
                    className={`${(emailState.isValid === false) ? styles["invalid"] : ''}`}
                    type="text"
                    name="userEmail"
                    value={emailState.value}
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler}
                />
            </div>
            <div className={`${styles["login-form-group"]}`} >
                <label className={`${styles["login-form-label"]} ${(passwordState.isValid === false) ? styles["invalid"] : ''}`} htmlFor="userPassword">Password:</label>
                <input
                    className={`${(passwordState.isValid === false) ? styles["invalid"] : ''}`}
                    type="password"
                    name="userPassword"
                    value={passwordState.value}
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler}
                />
            </div>
            <button className={`${(!formIsValid) ? styles["unactive"]: ''}`} type="submit" >Log in</button>
        </form>
    );
}

export default LoginForm;