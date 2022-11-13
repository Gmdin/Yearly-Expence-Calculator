import './ExpenceDate.css'
const ExpenceDate=(props)=>{
   const day=props.date.getDate();
     const month=props.date.toLocaleString('default', { month: 'short' });
    const year=props.date.getFullYear();
   return(
    <div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__day">{day}</div>
    <div className="expense-date__year">{year}</div>
    </div>
   ); 
}
export default ExpenceDate;