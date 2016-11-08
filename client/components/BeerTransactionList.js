import React from 'react'
import classNames from 'classnames'
import BeerTransaction from './BeerTransaction'

class BeerTransactionList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const header = classNames('transaction')
    const flexTitle = classNames('flex-title')
    const container = classNames('flex-container')
    const heading = classNames('inventory-headings', 'small-margins')
    return (
      <div>
        <div className={container}>
          <div className={header}>
          <div className={flexTitle}>
            <h2 className={heading}>Inventory Transactions</h2>
          </div>
        </div>
      </div>
        <ul>
          {
            this.props.transactions.length > 0 ?
            this.props.transactions.map((transaction) =>
              <BeerTransaction transaction={transaction} key={transaction.id}/>
            ) :
            <h2 >No Transactions Found</h2>
          }
        </ul>
      </div>
    )
  }
}

export default BeerTransactionList
