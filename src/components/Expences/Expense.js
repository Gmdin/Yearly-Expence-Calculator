import ExpenceItem from "./ExpenceItem";
import "./Expense.css";
import Cards from "../UI/Cards";
import ExpenceFilter from "./ExpenceFilter";
import { useState } from "react";
const Expense=(props)=>{
        const [filterYear,setFilterYear]=useState('2020');
      const  onSelectChangeYear=(change)=>{
        setFilterYear(change);
      }
    return(
        <Cards className="expense">
            <ExpenceFilter selected={filterYear} onSelectChangeYear={onSelectChangeYear}/>
            {props.expense.map((expense)=>(
              <ExpenceItem 
              key={expense.id}
               title={expense.title} 
               price={expense.price} 
               date={expense.dat}/>
            ))};
            </Cards>
    );
}
export default Expense;