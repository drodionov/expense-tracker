import './Expenses.css'
import ExpenseItem from "./ExpenseItem"

function Expenses(props) {
  const expenseItems = props.items.map(
      (props) => <div><ExpenseItem date={props.date} title={props.title}
                                  amount={props.amount}/></div>)
  return (
      <div className={'expense-item'}>
        {expenseItems}
      </div>
  )
}

export default Expenses