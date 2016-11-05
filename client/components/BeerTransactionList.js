import React from 'react'
import classNames from 'classnames'
import BeerTransaction from './BeerTransaction'

class BeerTransactionList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        {
          this.props.transactions.length > 0 ?
          this.props.transactions.map((transaction) =>
            <BeerTransaction transaction={transaction} key={transaction.id}/>
          ) :
          <h2 >No Transactions Found</h2>
        }
      </div>
    )
  }
}

export default BeerTransactionList
