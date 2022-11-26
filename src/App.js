import { useState } from "react";
import Expense from "./components/Expences/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const dummyData=[
  {
    id:'e1',
    title:'Car',
    price:2000,
    dat:new Date(2022,5,3),
  },
  {
    id:'e2',
    title:'Bike',
    price:300,
    dat:new Date(2022,1,7),
  },
  {
    id:'e3',
    title:'Exp',
    price:5000,
    dat:new Date(2021,5,3),
  }
];
function App() {

  const [expense,setExpense]=useState(dummyData);
  
  const getNewExpenseData=exp=>{
    setExpense(prevExpense=>{
      return [exp,...prevExpense];
    })
    // console.log("app.js");
    // console.log(exp);
  }
  return (
    <div>
      <NewExpense dataGetFromInput={getNewExpenseData}/>
     <Expense expense={expense}/>
    </div>
  );
}

export default App;
