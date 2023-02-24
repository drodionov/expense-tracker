import './ExpenseForm.css'
import {useState} from "react";

const EMPTY_EXPENSE = {
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: ''
};
const ExpenseForm = (props) => {
  const [enteredData, setEnteredData] = useState(EMPTY_EXPENSE)

  const titleChangeHandler = (event) => {
    setEnteredData((prevState) => {
      return {...prevState, enteredTitle: event.target.value}
    })
  }
  const amountChangeHandler = (event) => {
    setEnteredData((prevState) => {
      return {...prevState, enteredAmount: event.target.value}
    })
  }
  const dateChangeHandler = (event) => {
    setEnteredData((prevState) => {
      return {...prevState, enteredDate: event.target.value}
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const newExpense = {
      title: enteredData.enteredTitle,
      amount: enteredData.enteredAmount,
      date: new Date(enteredData.enteredDate)
    }
    props.onSaveExpense(newExpense)
    setEnteredData(() => {
      return EMPTY_EXPENSE
    })
  }

  const onCancelHandler = () => {
    setEnteredData(() => {
      return EMPTY_EXPENSE
    })
    props.onCancelForm()
  }

  return (
      <form onSubmit={submitHandler}>
        <div className={'new-expense__controls'}>
          <div className={'new-expense__control'}>
            <label>Title</label>
            <input type={'text'} value={enteredData.enteredTitle}
                   onChange={titleChangeHandler}/>
          </div>
          <div className={'new-expense__control'}>
            <label>Amount</label>
            <input type={'number'} min={0.01} step={0.01}
                   value={enteredData.enteredAmount}
                   onChange={amountChangeHandler}/>
          </div>
          <div className={'new-expense__control'}>
            <label>Date</label>
            <input type={'date'} value={enteredData.enteredDate}
                   onChange={dateChangeHandler}/>
          </div>
        </div>
        <div className={'new-expense__actions'}>
          <button onClick={onCancelHandler}>Cancel</button>
          <button type={'submit'}>Add expense</button>
        </div>
      </form>
  )
}

export default ExpenseForm