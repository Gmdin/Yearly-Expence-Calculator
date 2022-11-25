import ExpenceItem from "./ExpenceItem";
import "./Expense.css";
import Cards from "../UI/Cards";
import ExpenceFilter from "./ExpenceFilter";
import { useState } from "react";
const Expense=(props)=>{
        const [filterYear,setFilterYear]=useState('2020');
      const  onSelectChangeYear=(change)=>{
        setFilterYear(change);
        console.log('h',change);
      }
    return(
        <Cards className="expense">
            <ExpenceFilter selected={filterYear} onSelectChangeYear={onSelectChangeYear}/>
            <ExpenceItem title={props.expense[0].title} price={props.expense[0].price} date={props.expense[0].dat}></ExpenceItem>
      <ExpenceItem title={props.expense[1].title} price={props.expense[1].price} date={props.expense[1].dat}></ExpenceItem>
      <ExpenceItem title={props.expense[2].title} price={props.expense[2].price} date={props.expense[2].dat}></ExpenceItem>
        </Cards>
    );
}
export default Expense;