import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';
const NewExpense=()=>{
    const formSubmitSaveData=addExpence=>{
        const expenseData={
            ...addExpence
        };
        console.log(expenseData);
    };
    return(
        <div className="new-expense">
            <NewExpenseForm formSubmitSaveData={formSubmitSaveData}/>
        </div>
    );
}
export default NewExpense;