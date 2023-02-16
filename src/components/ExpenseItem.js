import './ExpenseItem.css'

function ExpenseItem() {
  return (<div className="expense-item">
    <div>February 17th 2023</div>
    <div className={"expense-item__description"}>
      <h2>Cheese</h2>
      <div className={"expense-item__price"}>$5.55</div>
    </div>
  </div>)
}

export default ExpenseItem