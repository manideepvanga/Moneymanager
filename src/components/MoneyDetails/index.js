// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  console.log(balance, income, expenses)

  return (
    <div className="unorder">
      <li className="listitem color1">
        <div>
          <img
            className="detailsimg"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div>
          <p>your Balance</p>
          <p>
            Rs <p data-testid="balanceAmount">{balance}</p>
          </p>
        </div>
      </li>
      <li className="listitem color2">
        <div>
          <img
            className="detailsimg"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div>
          <p>your Income</p>
          <p>
            Rs <p data-testid="incomeAmount">{income}</p>
          </p>
        </div>
      </li>
      <li className="listitem color3">
        <div>
          <img
            className="detailsimg"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div>
          <p>your Expenses</p>
          <p>
            Rs <p data-testid="expensesAmount">{expenses}</p>
          </p>
        </div>
      </li>
    </div>
  )
}
export default MoneyDetails
