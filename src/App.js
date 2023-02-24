import Expenses from "./components/Expenses/Expenses"
import {useState} from "react"
import ExpenseControl from "./components/NewExpense/ExpenseControl";

const DUMMY_EXPENSES = [
  {id: 1, date: new Date(2023, 1, 16), title: 'XBOX One S', amount: 600},
  {id: 2, date: new Date(2022, 0, 15), title: 'XBOX One X', amount: 1000},
  {
    id: 3,
    date: new Date(2021, 11, 14),
    title: 'Sony Playstation 5',
    amount: 950
  },
  {id: 4, date: new Date(2020, 9, 13), title: 'Nintendo Switch', amount: 400},
  {id: 5, date: new Date(2019, 6, 13), title: 'SteamDeck', amount: 499.99}
];
const App = () => {
  const [expenseData, expenseDataSet] = useState(DUMMY_EXPENSES)

  const addExpenseDataHandler = expense => {
    expenseDataSet((prevState) => {
      return [expense, ...prevState]
    })
  }

  return (
      <div>
        <ExpenseControl onAddNewExpense={addExpenseDataHandler}/>
        <Expenses items={expenseData}/>
      </div>
  )
}

export default App
