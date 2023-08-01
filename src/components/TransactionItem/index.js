import './index.css'

const TransactionItem = props => {
  const {eachDetails} = props
  const {transactionType, name, category, time, amount} = eachDetails
  const transactionSymbol =
    transactionType !== 'credit'
      ? 'https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690783902/green_symbol_uk1gf3.png'
      : 'https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690783902/red_symbol_jzbdlw.png'

  return (
    <li className="transaction">
      <div>
        <img className="symbolStyle" alt="" src={transactionSymbol} />
        <span>{name}</span>
      </div>

      <span>{category}</span>
      <span>{time}</span>
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

export default TransactionItem
