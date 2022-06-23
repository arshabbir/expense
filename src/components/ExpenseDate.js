import "./ExpenseDate.css"

function ExpenseDate(props ){

    const month = props.expensedate.toLocaleString('en-US', {month: 'long' })
    const day = props.expensedate.toLocaleString('en-US', {day: 'numeric' })
    const year = props.expensedate.toLocaleString('en-US',{ year: 'numeric'})
    
    return (
        <div className="expense-date">
            <div className="expense-date_month">{month}</div>
            <div className="expense-date_day">{day}</div>
            <div className="expense-date_year">{year}</div>
        </div>
    )
}

export default ExpenseDate;