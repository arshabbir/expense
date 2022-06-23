import ExpenseDate from "./ExpenseDate";
import "./Expenseitemlist.css"

function ExpenselistItem(props){
    const exitem = props.data.title;
    const exdate = props.data.date;
    const exprice = props.data.price;
    return (
        <div className="expense-item">
          <ExpenseDate expensedate={exdate}></ExpenseDate>
          <div className="expense-item__description"> 
            <h2 >
                {exitem}
            </h2>
            <div className="expense-item__price">
              {exprice}
            </div>

          </div> 
          
        </div>
    );
}

export default ExpenselistItem