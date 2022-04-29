import './ExpenseItem.css';

function ExpenseItem() {

    return (
        <div className="expense-item">
            <div className="expense-item__description">
                <h2>Tittle: <span>Sunglasses</span></h2>
            </div>
            <div className="expense-item__description">
                <p>Date: <span>29.04.2022</span></p>
            </div>
            <div className="expense-item__price">
                <p>Price: <span>$20.50</span></p>
            </div>
        </div>
    );
}

export default ExpenseItem;