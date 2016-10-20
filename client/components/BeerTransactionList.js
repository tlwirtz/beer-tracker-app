import React from 'react'
import classNames from 'classnames'
import BeerTransaction from './BeerTransaction'

class BeerTransactionList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ol>
        {
          this.props.transactions.map((transaction) =>
            <BeerTransaction transaction={transaction} key={transaction.id}/>
          )
        }
      </ol>
    )
  }
}

export default BeerTransactionList
