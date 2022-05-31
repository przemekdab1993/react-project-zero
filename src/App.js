
import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

    const expenses = [
        {title: 'Sunglasses', date: new Date(2021,2,27), price: 20.32},
        {title: 'Football', date: new Date(2021,3,17), price: 43.00},
        {title: 'Shoes', date: new Date(2021,4,12), price: 30.22},
    ];

    return (
        <div className="App">
            <NewExpense/>
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
