import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import './index.css'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    balance: 0,
    amount: null,
    type: 'Income',
    income: 0,
    expenses: 0,
    itemsarray: [],
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  amountChange = event => {
    this.setState({amount: event.target.value})
  }

  typeChange = event => {
    this.setState({type: event.target.value})
    console.log(event.target.value)
  }

  Addtransaction = event => {
    event.preventDefault()

    const {title, amount, type, income, expenses, itemsarray} = this.state

    const newitem = {
      id: v4(),
      title,
      amount,
      type,
      income,
      expenses,
    }

    this.setState(prevState => ({
      itemsarray: [...prevState.itemsarray, newitem],
      title: '',
      amount: '',
    }))

    if (type === 'Income') {
      this.setState(prevState => ({
        balance: prevState.balance + Number(amount),
      }))
      this.setState(prevState => ({income: prevState.income + Number(amount)}))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + Number(amount),
      }))
      this.setState(prevState => ({
        balance: prevState.balance - Number(amount),
      }))
    }
  }

  deleted = id => {
    const {itemsarray} = this.state
    this.setState({itemsarray: itemsarray.filter(each => id !== each.id)})
  }

  render() {
    const {balance, title, amount, income, expenses, itemsarray} = this.state

    return (
      <div className="container">
        <div className="content">
          <div className="portionA">
            <div>
              <h1>Hi, Richard</h1>
              <p>
                Welcome back to your<span>Money Manager</span>
              </p>
            </div>
          </div>
          <ul className="container2">
            <MoneyDetails
              balance={balance}
              amount={amount}
              income={income}
              expenses={expenses}
            />
          </ul>

          <div className="container3">
            <form type="form" className="form" onSubmit={this.Addtransaction}>
              <h1>Add Transaction</h1>
              <div className="inputs">
                <label htmlFor="title">TITLE</label>
                <input
                  onChange={this.titleChange}
                  id="title"
                  type="text"
                  placeholder="TITLE"
                  value={title}
                />
              </div>
              <div className="inputs">
                <label htmlFor="amount">AMOUNT</label>
                <label htmlFor="amount">AMOUNT</label>
                <input
                  onChange={this.amountChange}
                  id="amount"
                  type="number"
                  placeholder="AMOUNT"
                  value={amount}
                />
              </div>
              <div className="inputs">
                <label htmlFor="type">TYPE</label>
                <select id="type" onChange={this.typeChange}>
                  <option
                    value={transactionTypeOptions[0].optionId}
                    id={transactionTypeOptions[0].optionId}
                  >
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option
                    value={transactionTypeOptions[1].optionId}
                    id={transactionTypeOptions[1].optionId}
                  >
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
              </div>
              <button className="add" type="submit">
                Add
              </button>
            </form>
            <div className="container4">
              <div className="downcontent">
                <h1>History</h1>
                <ul className="unordered">
                  <li className="listitems">
                    <p className="kala">Title</p>
                    <p className="kala">amount</p>
                    <p className="kala">Type</p>
                  </li>
                  {itemsarray.map(each => (
                    <TransactionItem
                      details={each}
                      key={each.id}
                      deleted={this.deleted}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
