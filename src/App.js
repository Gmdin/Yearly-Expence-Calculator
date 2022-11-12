import ExpenceItem from "./components/Expences/ExpenceItem";

function App() {
  const expense=[
    {
      id:'e1',
      title:'Car',
      price:2000,
      Date:new Date(2022,5,3),
    },
    {
      id:'e2',
      title:'Bike',
      price:300,
      Date:new Date(2022,1,3),
    },
    {
      id:'e3',
      title:'Exp',
      price:5000,
      Date:new Date(2021,5,3),
    }
  ];
  return (
    <div>
     
      <ExpenceItem tit={expense[0].title} pric={expense[0].price} date={expense[0].Date}></ExpenceItem>
      <ExpenceItem tit={expense[1].title} pric={expense[1].price} date={expense[1].Date}></ExpenceItem>
      <ExpenceItem tit={expense[2].title} pric={expense[2].price} date={expense[2].Date}></ExpenceItem>
    </div>
  );
}

export default App;
