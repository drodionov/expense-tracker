import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
import Card from "../Common/Card";

const Expenses = (props) => {
  const expenseItems = props.items.map(
      (item) => <ExpenseItem className={'expense-item'} key={item.id}
                             date={item.date} title={item.title}
                             amount={item.amount}/>)
  return (
      <Card className={'expenses'}>
        {expenseItems}
      </Card>
  )
}

export default Expenses