import React, {useReducer, useEffect, useState, useContext, useRef} from "react";

import styles from "./LoginForm.module.css";
import AuthContext from "../../../store/auth-context";
import LoginInput from "./LoginInput";

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

    const authCtx = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

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
            return authCtx.onLogin(USERDEFAULTDATA);
        } else {
            if (!emailState.isValid) {
                emailInputRef.current.focus();
            }
            else if (!passwordState.isValid) {
                passwordInputRef.current.focus();
            }
        }
    }

    return (
        <form onSubmit={submitHandler} className={styles["login-form"]}>
            <LoginInput
                type='email'
                name='userEmail'
                title="Email:"
                value={emailState.value}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                ref={emailInputRef}
            />
            <LoginInput
                type='password'
                name='userPassword'
                title="Password:"
                value={passwordState.value}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                ref={passwordInputRef}
            />
            <button className={''} type="submit" >Log in</button>
        </form>
    );
}

export default LoginForm;