import Expense from "./components/Expences/Expense";
import NewExpenseForm from "./components/NewExpense/NewExpenseForm";
function App() {
  const expense=[
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
  return (
    <div>
      <NewExpenseForm/>
     <Expense expense={expense}/>
    </div>
  );
}

export default App;
