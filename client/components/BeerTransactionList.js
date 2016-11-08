import React from 'react'
import classNames from 'classnames'
import BeerTransaction from './BeerTransaction'
import Heading from './Heading'

class BeerTransactionList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Heading text="Inventory Transactions" />
        <ul>
          {
            this.props.transactions.length > 0 ?
            this.props.transactions.map((transaction) =>
              <BeerTransaction transaction={transaction} key={transaction.id}/>
            ) :
            <Heading text="No Transactions Found" />
          }
        </ul>
      </div>
    )
  }
}

export default BeerTransactionList
