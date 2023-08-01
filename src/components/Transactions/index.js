import {Component} from 'react'

import TabsHorizontal from '../TabsHorizontal'

import TransactionItem1 from '../TransactionItem1'

import './index.css'

const tabsList = [
  {id: 'All Transactions', name: 'All Transactions'},
  {id: 'debit', name: 'Debit'},
  {id: 'credit', name: 'Credit'},
]

class Transaction extends Component {
  state = {activeTab: tabsList[0].id, TransactionDetails: []}

  componentDidMount() {
    this.allTransactions()
  }

  allTransactions = async () => {
    const apiUrl =
      'https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=15&offset=2'
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
      const updatedData = fetchedData.transactions.map(product => ({
        amount: product.amount,
        category: product.category,
        date: product.date,
        id: product.id,
        transactionName: product.transaction_name,
        type: product.type,
        userId: product.user_id,
      }))
      this.setState({TransactionDetails: updatedData})
    }
  }

  changeactiveid = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {activeTab, TransactionDetails} = this.state
    // const newTransactionDetails =
    //   activeTab === 'All Transactions'
    //     ? TransactionDetails
    //     : TransactionDetails.map(eachList =>
    //         eachList.filter(eachItem => eachItem.type === {activeTab}),
    //       )
    // console.log(newTransactionDetails)
    const {show} = this.props
    const homeClassName = show ? '' : 'notShow'

    return (
      <div className={homeClassName}>
        {/* Tabs Container */}
        <ul className="transactionTabContainer">
          {tabsList.map(eachTab => (
            <TabsHorizontal
              tabDetails={eachTab}
              id={eachTab.id}
              activated={eachTab.id === activeTab}
              changeactiveid={this.changeactiveid}
            />
          ))}
        </ul>
        {/* Results  */}
        <div className="lastTransaction1">
          <ul>
            {TransactionDetails.map(eachItem => (
              <TransactionItem1 eachDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Transaction
