import './ExpenceItem.css';
const ExpenceItem=(props)=>{
    return (
        <div className="expense-item">
            <div>{props.tit}</div>
            <div className="expense-item__description">
                <h2>Date</h2>
                <div className="expense-item__price">${props.pric}</div>
            </div>
        </div>
    );

}
export default ExpenceItem;