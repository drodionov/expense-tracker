import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
import Card from "../Common/Card";

function Expenses(props) {
  const expenseItems = props.items.map(
      (props) => <ExpenseItem className={'expense-item'} date={props.date} title={props.title}
                                  amount={props.amount}/>)
  return (
      <Card className={'expenses'}>
        {expenseItems}
      </Card>
  )
}

export default Expenses