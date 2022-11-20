import React,{ useState } from 'react';
import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css';
import Cards from '../UI/Cards';
const ExpenceItem=(props)=>{
    const [title,setTitle]=useState(props.title);
    console.log("hi")
    const changeHandler=()=>{
        setTitle('Updated Title');
        console.log(title);
    }
    return (
        <Cards className="expense-item">
            <ExpenceDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.price}
                </div>
                <button onClick={changeHandler}>Change me</button>
            </div>
        </Cards>
    );
}
export default ExpenceItem;