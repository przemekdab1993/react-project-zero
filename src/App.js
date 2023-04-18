import React, {useContext, useEffect, useState} from "react";

import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
import UserLabel from "./components/User/UserLabel/UserLabel";
import LoginPanel from "./components/User/LoginPanel/LoginPanel";
import AuthContext from "./store/auth-context";
import ExpensesContext, {ExpensesContextProvider} from "./store/expenses-context";
import BackwardCounter from "./components/Counters/BackwardCounter";
import ForwardCounter from "./components/Counters/ForwardCounter";


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
            <ForwardCounter />
            <BackwardCounter />
        </div>
    );
}

export default App;
