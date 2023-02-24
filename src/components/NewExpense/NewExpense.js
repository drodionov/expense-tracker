import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import Card from "../Common/Card";

const NewExpense = props => {
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random()
    }

    props.onAddExpense(newExpense)
  }

  const onCancelFormHandler = () => {
    props.onHideForm()
  }

  return (<Card className={'new-expense'}>
    <ExpenseForm onSaveExpense={onSaveExpenseHandler} onCancelForm={onCancelFormHandler}/>
  </Card>)
}

export default NewExpense