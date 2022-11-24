import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';
const NewExpense=(props)=>{
    const formSubmitSaveData=addExpence=>{
        const expenseData={
            ...addExpence
        };
        props.dataGetFromInput(expenseData);
    };
    return(
        <div className="new-expense">
            <NewExpenseForm formSubmitSaveData={formSubmitSaveData}/>
        </div>
    );
}
export default NewExpense;