
import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem';

function App() {

    const expenses = [
        {title: 'Sunglasses', date: new Date(2021,2,27), price: 20.32},
        {title: 'Football', date: new Date(2021,3,17), price: 43.00},
        {title: 'Shoes', date: new Date(2021,4,12), price: 30.22},
    ];

    return (
        <div className="App">
            <h2>Hellow Word</h2>
            <p>This i s paragraph.</p>
            <ExpenseItem
                title={expenses[0].title}
                date={expenses[0].date}
                price={expenses[0].price}
            />
            <ExpenseItem
                title={expenses[1].title}
                date={expenses[1].date}
                price={expenses[1].price}
            />
            <ExpenseItem
                title={expenses[2].title}
                date={expenses[2].date}
                price={expenses[2].price}
            />
        </div>
    );
}

export default App;
