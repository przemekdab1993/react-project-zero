import React,{useState} from "react";

import styles from "./LoginForm.module.css";

const USERDEFAULTDATA = {
    firstName: 'Jacek',
    secondName: 'Duda',
    avatar: 'red'
};

const LoginForm = (props) => {

    const [enteredUserEmail, setEnteredUserEmail] = useState('');
    const [enteredUserPassword, setEnteredUserPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    const inputChangeHandler = (event) => {
        const inputName = event.target.name;

        if (inputName === 'userEmail') {
            setEnteredUserEmail(prevState => event.target.value)
        }
        if (inputName === 'userPassword') {
            setEnteredUserPassword(prevState => event.target.value);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredUserPassword.length >= 6 && enteredUserEmail.length > 0) {
            return props.onUserLogin(USERDEFAULTDATA);
        }
    }

    return (
        <form onSubmit={submitHandler} className={styles["login-form"]}>
            <div className={`${styles["login-form-group"]}`} >
                <label className={styles["login-form-label"]} htmlFor="userEmail">E-mail:</label>
                <input
                    type="text"
                    name="userEmail"
                    value={enteredUserEmail}
                    onChange={inputChangeHandler}
                />
            </div>
            <div className={`${styles["login-form-group"]}`} >
                <label className={styles["login-form-label"]} htmlFor="userPassword">Password:</label>
                <input
                    type="password"
                    name="userPassword"
                    value={enteredUserPassword}
                    onChange={inputChangeHandler}
                />
            </div>
            <button className={`${(!enteredUserEmail || enteredUserPassword.length < 6) ? styles["unactive"]: ''}`} type="submit" >Log in</button>
        </form>
    );
}

export default LoginForm;