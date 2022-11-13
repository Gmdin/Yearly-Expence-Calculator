import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css';
const ExpenceItem=(props)=>{
  //  2022-06-02T19:00:00.000Z
    return (
        <div className="expense-item">
            <ExpenceDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    );

}
export default ExpenceItem;