// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleted} = props
  const {id, title, amount, type} = details
  const deleteinitate = () => {
    deleted(id)
  }

  return (
    <li className="transactionitem" key={id}>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        className="deletebutton"
        onClick={deleteinitate}
        data-testid="delete"
      >
        <img
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
