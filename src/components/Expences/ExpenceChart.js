import Chart from "../charts/Chart";

const ExpenceChart=props=>{
const chartDataPoints=[
    {label:'Jan', value:0},
    {label:'Feb', value:0},
    {label:'Mar', value:0},
    {label:'Apr', value:0},
    {label:'May', value:0},
    {label:'Jun', value:0},
    {label:'Jly', value:0},
    {label:'Aug', value:0},
    {label:'Sep', value:0},
    {label:'Oct', value:0},
    {label:'Nov', value:0},
    {label:'Dec', value:0},
];
for (const expence of props.expense){
        const expenceMonth=expence.dat.getMonth();
        chartDataPoints[expenceMonth].value+=expence.amount;
}
    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpenceChart;