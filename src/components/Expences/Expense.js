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
      const filterYearExpence=props.expense.filter((expence)=>{
        return expence.dat.getFullYear().toString()===filterYear;
      });
      let expenceContnet=<p>No Record find</p>;
      if(filterYearExpence.length>0){
        expenceContnet=filterYearExpence.map((expense)=>(
          <ExpenceItem 
          key={expense.id}
           title={expense.title} 
           price={expense.price} 
           date={expense.dat}/>
        ));
      }
    return(
        <Cards className="expense">
            <ExpenceFilter selected={filterYear} onSelectChangeYear={onSelectChangeYear}/>
           {expenceContnet};
            </Cards>
    );
}
export default Expense;