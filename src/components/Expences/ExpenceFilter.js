import './ExpenceFilter.css';
const ExpenceFilter=(props)=>{
    const cahngeSelectYear=(event)=>{
        props.onSelectChangeYear(event.target.value);
    }
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
            <label>Filter data year wise</label>
            <select value={props.selected} onChange={cahngeSelectYear}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
            </div>
        </div>
    );

}
export default ExpenceFilter;