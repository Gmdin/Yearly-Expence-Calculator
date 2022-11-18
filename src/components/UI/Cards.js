import "./Cards.css";
const Cards=(props)=>{
const classes=`card ${props.className}` ;
console.log("hi i am",classes);
return (
    <div className={classes}>
        {props.children}
    </div>
);
}
export default Cards;