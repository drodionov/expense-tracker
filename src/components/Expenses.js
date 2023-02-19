import './Expenses.css'
import ExpenseItem from "./ExpenseItem"

function Expenses(props) {
  const expenseItems = props.items.map(
      (props) => <ExpenseItem className={'expense-item'} date={props.date} title={props.title}
                                  amount={props.amount}/>)
  return (
      <div className={'expenses'}>
        {expenseItems}
      </div>
  )
}

export default Expenses