import './Expenses.css'
import Card from "../Common/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = props => {

  const [filterYear, setFilterYear] = useState('')
  const onChangeYearHandler = selectedYear => {
    setFilterYear(selectedYear)
  }
  const filteredItems = props.items.filter(
      item => item.date.getFullYear().toString() === filterYear || filterYear
          === '')

  return (
      <Card className={'expenses'}>
        <ExpensesFilter selectedYear={filterYear}
                        onChangeYear={onChangeYearHandler}/>
        <ExpenseChart expenses={filteredItems}/>
        <ExpensesList items={filteredItems}/>
      </Card>
  )
}

export default Expenses