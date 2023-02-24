import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
import Card from "../Common/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";

const Expenses = props => {

  const [filterYear, setFilterYear] = useState('')
  const expenses = props.items.filter(
      item => item.date.getFullYear().toString() === filterYear || filterYear
          === '')
  .map((item) => <ExpenseItem className={'expense-item'} key={item.id}
                              date={item.date} title={item.title}
                              amount={item.amount}/>)

  const onChangeYearHandler = selectedYear => {
    setFilterYear(selectedYear)
  }

  return (
      <Card className={'expenses'}>
        <div>
          <ExpensesFilter selectedYear={filterYear}
                          onChangeYear={onChangeYearHandler}/>
        </div>
        {expenses.length === 0 ? 'No expenses found' : expenses}
      </Card>
  )
}

export default Expenses