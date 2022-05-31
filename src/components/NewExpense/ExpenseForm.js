
import './ExpenseForm.css'

const ExpenseForm = () => {

    return (
        <form className="new-expense-form">
            <div className="form-group new-expense-form-group">
                <label className="new-expense-label" htmlFor="label-title">Title</label>
                <input type="text" name="title"/>
            </div>
            <div className="form-group new-expense-form-group">
                <label className="new-expense-label" htmlFor="label-price">Price</label>
                <input type="number" min="0.01" step="0.01" name="price"/>
            </div>
            <div className="form-group new-expense-form-group">
                <label className="new-expense-label" htmlFor="label-date">Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" name="date"/>
            </div>

            <button type="submit" >Add Expense</button>
        </form>
    );
}

export default ExpenseForm;