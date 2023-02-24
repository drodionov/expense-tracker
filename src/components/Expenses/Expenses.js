import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
import Card from "../Common/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
  const expenseItems = props.items.map(
      (item) => <ExpenseItem className={'expense-item'} key={item.id}
                             date={item.date} title={item.title}
                             amount={item.amount}/>)

  const [filterYear, setFilterYear] = useState('2022')

  const onChangeYearHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }

  return (
      <Card className={'expenses'}>
        <div>
          <ExpensesFilter selectedYear={filterYear} onChangeYear={onChangeYearHandler}/>
        </div>
        {expenseItems}
      </Card>
  )
}

export default Expenses