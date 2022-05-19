import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div className="expense-item__description">
                <h2>Title: <span>{ props.title }</span></h2>
            </div>
            <div className="expense-item__description">
                <p>Date: <span>{ props.date.toISOString() }</span></p>
            </div>
            <div className="expense-item__price">
                <p>Price: <span>${ props.price }</span></p>
            </div>
        </div>
    );
}

export default ExpenseItem;