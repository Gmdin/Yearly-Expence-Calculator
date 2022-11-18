import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css';
import Cards from '../UI/Cards';
const ExpenceItem=(props)=>{
    return (
        <Cards className="expense-item">
            <ExpenceDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </Cards>
    );
}
export default ExpenceItem;