import React from "react";

import styles from "./LoginPanel.module.css";
import Card from "../../UserInterface/Card";
import LoginForm from "./LoginForm";

const LoginPanel = () => {

    return (
        <Card className={styles['login-form-panel']} >
            <div className={styles['login-form-panel-content']}>
                <h2>Welcome Back!</h2>
                <LoginForm/>
            </div>
        </Card>
    );
}

export default LoginPanel;