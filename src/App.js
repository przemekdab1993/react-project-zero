import React, {useState} from "react";

import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
import UserLabel from "./components/User/UserLabel/UserLabel";
import LoginPanel from "./components/User/LoginPanel/LoginPanel";

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Sunglasses', date: new Date(2021,2,27), price: 20.32},
    {id: 'e2', title: 'Football', date: new Date(2021,3,17), price: 43.00},
    {id: 'e3', title: 'Shoes', date: new Date(2021,4,12), price: 30.22},
    {id: 'e4', title: 'Packet', date: new Date(2020,2,6), price: 40.50},
];

const App = () => {

    const [expensesList, setExpensesList] = useState(DUMMY_EXPENSES);
    const [userIsLogin, setUserIsLogin] = useState(false);
    const [userData, setUserData] = useState({firstName: '', secondName: '', avatar: ''});

    const addExpenseHandler = (expense) => {
        const newExpense = {
            ...expense
        };

        setExpensesList( (prevExpensesList) => {
            return [...prevExpensesList, newExpense];
        });
    }

    const userDataHandler = (userData) => {
        setUserData(prevState => userData);
        setUserIsLogin(true);
    }

    const LogoutHandler = () => {
        setUserData(prevState => {return ({firstName: '', secondName: '', avatar: ''})});
        setUserIsLogin(false);
    }

    return (
        <div className="App">
            <UserLabel
                userFirstName={userData.firstName}
                userSecondName={userData.secondName}
                userAvatar={userData.avatar}
                isLogin={userIsLogin}
                onLogout={LogoutHandler}
            ></UserLabel>
            {(userIsLogin) ? (
                <React.Fragment>
                    <NewExpense onAddExpenseDate={addExpenseHandler} />
                    <Expenses expenses={expensesList} />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <LoginPanel
                        onUserDataLogin={userDataHandler}
                    ></LoginPanel>
                </React.Fragment>
            )}
        </div>
    );
}

export default App;
