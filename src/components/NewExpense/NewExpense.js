import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import Card from "../Common/Card";

const NewExpense = ({onAddExpense, onHideForm}) => {
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random()
    }

    onAddExpense(newExpense)
  }

  return (<Card className={'new-expense'}>
    <ExpenseForm onSaveExpense={onSaveExpenseHandler} onCancelForm={onHideForm}/>
  </Card>)
}

export default NewExpense