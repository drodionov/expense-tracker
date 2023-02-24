import Card from "../Common/Card";
import {useState} from "react";
import NewExpense from "./NewExpense";

const ExpenseControl = ({onAddNewExpense}) => {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState('false')
  const addNewExpenseHandler = () => {
    setShowNewExpenseForm('true')
  }

  const onHideFormHandler = () => {
    setShowNewExpenseForm('false')
  }

  const onAddExpenseHandler = newExpense => {
    setShowNewExpenseForm('false')
    onAddNewExpense(newExpense)
  }

  if (showNewExpenseForm === 'true') {
    return <NewExpense onHideForm={onHideFormHandler}
                       onAddExpense={onAddExpenseHandler}/>
  }

  return (
      <Card className={'new-expense'}>
        <button onClick={addNewExpenseHandler}>Add new expense</button>
      </Card>)
}

export default ExpenseControl