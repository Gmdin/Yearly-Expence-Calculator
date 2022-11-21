import { useState } from 'react';
import './NewExpenseForm.css';
const NewExpenseForm=()=>{
    // const [title,setTitle]=useState('');
    // const [price,setPrice]=useState('');
    // const [date,setDate]=useState('');
    // const titleChangeHandler=(event)=>{
    //     setTitle(event.target.value);
    // }
    // const priceChangeHandler=(event)=>{
    //     setPrice(event.target.value);
    // }
    // const dateChangeHandler=(event)=>{
    //     setDate(event.target.value);
    // }
    return(
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__controls">
            <label>Enter Title</label>
            <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
            <label>Enter Price</label>
            <input type="number" min='0.01' step="0.01" onChange={priceChangeHandler}/>
            </div>
            <div className="new-expense__controls">
            <label>Date</label>
            <input type="date" min='2019-12-12' step="2022-12-12" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
           <button type='submit' >Add Expense</button>
            </div>
            </div>
        </form>
    );
}
export default NewExpenseForm;