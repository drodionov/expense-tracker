import Expenses from "./components/Expenses"

function App() {
  const expenseData = [
    {id: 1, date: new Date(2023, 1, 16), title: 'XBOX One S', amount: 600},
    {id: 2, date: new Date(2023, 1, 15), title: 'XBOX One X', amount: 1000},
    {
      id: 3,
      date: new Date(2023, 1, 14),
      title: 'Sony Playstation 5',
      amount: 950
    },
    {id: 4, date: new Date(2023, 1, 13), title: 'Nintendo Switch', amount: 400}
  ]

  return (
      <div>
        <h2>Expense Tracker!</h2>
        <Expenses items={expenseData}/>
      </div>
  )
}

export default App
