import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {

  if (props.items.length === 0) {
    return <h2 className={'expenses-list__fallback'}>No expenses found!</h2>
  }

  const expenses = props.items.map(
      item => <ExpenseItem className={'expense-item'} key={item.id}
                           date={item.date} title={item.title}
                           amount={item.amount}/>)

  return <ul className={'expenses-list'}>{expenses}</ul>
}

export default ExpensesList