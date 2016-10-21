import React from 'react'
import classNames from 'classnames'
import BeerTransaction from './BeerTransaction'

class BeerTransactionList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const box = classNames('box')
    const content = classNames('content')
    const container = classNames('container')
    const subtitle = classNames('subtitle', 'is-3', 'has-text-centered', 'grey-text')

    return (
      <div>
        {
          this.props.transactions.length > 0 ?
          this.props.transactions.map((transaction) =>
            <BeerTransaction transaction={transaction} key={transaction.id}/>
          ) :
          <h2 className={subtitle}>No Transactions Found</h2>
        }
      </div>
    )
  }
}

export default BeerTransactionList
