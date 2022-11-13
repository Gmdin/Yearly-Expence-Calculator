import ExpenceItem from "./components/Expences/ExpenceItem";

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
     
      <ExpenceItem title={expense[0].title} price={expense[0].price} date={expense[0].dat}></ExpenceItem>
      <ExpenceItem title={expense[1].title} price={expense[1].price} date={expense[1].dat}></ExpenceItem>
      <ExpenceItem title={expense[2].title} price={expense[2].price} date={expense[2].dat}></ExpenceItem>
    </div>
  );
}

export default App;
