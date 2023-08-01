import './index.css'

const TransactionItem1 = props => {
  const {eachDetails} = props
  const {
    amount,
    category,
    date,
    id,
    transactionName,
    type,
    userId,
  } = eachDetails
  const transactionSymbol =
    type !== 'credit'
      ? 'https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690783902/green_symbol_uk1gf3.png'
      : 'https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690783902/red_symbol_jzbdlw.png'

  return (
    <li className="transaction1">
      <div>
        <img className="symbolStyle" alt="" src={transactionSymbol} />
        <span>{transactionName}</span>
      </div>

      <span>{category}</span>
      <span>{date}</span>
      <span>{amount}</span>
      <div>
        <img
          className="symbolStyle"
          alt=""
          src="https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690784323/pencil-02_zxyj0y.png"
        />
        <img
          className="symbolStyle"
          alt=""
          src="https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690784289/trash-01_ct17uk.png"
        />
      </div>
    </li>
  )
}

export default TransactionItem1
