import './Expenses.css'
import Card from "../Common/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = props => {

  const [filterYear, setFilterYear] = useState('')
  const onChangeYearHandler = selectedYear => {
    setFilterYear(selectedYear)
  }
  const expenses = props.items.filter(
      item => item.date.getFullYear().toString() === filterYear || filterYear
          === '')

  return (
      <Card className={'expenses'}>
        <ExpensesFilter selectedYear={filterYear}
                        onChangeYear={onChangeYearHandler}/>
        <ExpensesList items={expenses}/>
      </Card>
  )
}

export default Expenses