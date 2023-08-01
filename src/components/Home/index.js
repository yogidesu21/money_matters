import {Component} from 'react'

import './index.css'
import TransactionItem from '../TransactionItem'

const TransactionDetails = [
  {
    transactionType: 'credit',
    name: 'Spotify Subscription',
    category: 'Shopping',
    time: '28 Jan, 12:30 AM',
    amount: '-$150',
  },
  {
    transactionType: 'credit',
    name: 'Mobile Service',
    category: 'Service',
    time: '25 Jan, 10:40 PM',
    amount: '-$150',
  },
  {
    transactionType: 'Debit',
    name: 'Transfer',
    category: 'Service',
    time: '20 Jan, 10:40 PM',
    amount: '+$780',
  },
]

class Home extends Component {
  state = {credit: 0, debit: 0}

  componentDidMount() {
    this.allTransactions()
  }

  allTransactions = async () => {
    const apiUrl =
      'https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals'
    const options = {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        'x-hasura-role': 'user',
        'x-hasura-user-id': 1,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.totals_credit_debit_transactions
      this.setState({credit: updatedData[0].sum, debit: updatedData[1].sum})
    }
  }

  render() {
    const {credit, debit} = this.state
    const {show} = this.props
    const homeClassName = show ? '' : 'notShow'
    // console.log(credit, debit)
    return (
      <div className={homeClassName}>
        {/* Cards Container */}
        <div className="CardsContainer">
          {/* Credit Container */}
          <div className="Card">
            <div className="subCard">
              <h1 className="cardTitle green">${credit}</h1>
              <p className="cardSubtitle">Credit</p>
            </div>
            <img
              className="cardImage"
              alt=""
              src="https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690770286/Group_1_hgt2qk.png"
            />
          </div>
          {/* Debit Container */}
          <div className="Card">
            <div className="subCard">
              <h1 className="cardTitle red">${debit}</h1>
              <p className="cardSubtitle">Debit</p>
            </div>
            <img
              className=""
              alt=""
              src="https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690770285/Group_ra1jns.png"
            />
          </div>
        </div>
        {/* Sub Heading */}
        <p className="transactionStyle">Last Transaction</p>
        {/* 3 transactions */}
        <div className="lastTransaction">
          <ul>
            {TransactionDetails.map(eachItem => (
              <TransactionItem eachDetails={eachItem} />
            ))}
          </ul>
        </div>
        <p className="transactionStyle">Debit & Credit Overview</p>
      </div>
    )
  }
}
export default Home
