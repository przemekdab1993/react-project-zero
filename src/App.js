import React, {useContext, useEffect, useState} from "react";

import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
import UserLabel from "./components/User/UserLabel/UserLabel";
import LoginPanel from "./components/User/LoginPanel/LoginPanel";
import AuthContext from "./store/auth-context";
import ExpensesContext, {ExpensesContextProvider} from "./store/expenses-context";


const App = () => {

    const authCtx = useContext(AuthContext);

    return (
        <div className="App">
            <UserLabel />
            {(authCtx.isLoggedIn) ? (
                <ExpensesContextProvider>
                    <NewExpense />
                    <Expenses />
                </ExpensesContextProvider>
            ) : (
                <React.Fragment>
                    <LoginPanel />
                </React.Fragment>
            )}
        </div>
    );
}

export default App;
