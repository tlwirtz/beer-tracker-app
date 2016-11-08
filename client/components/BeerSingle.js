import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import Inventory from './Inventory'
import AddInventory from './AddInventory'
import RemoveInventory from './RemoveInventory'
import BeerDetailHeader from './BeerDetailHeader'
import BeerTransactionList from './BeerTransactionList'
import DeleteBeer from './DeleteBeer'

class BeerSingle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false,
    }
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
    this.calculateInventory = this.calculateInventory.bind(this)
  }

  onMouseLeaveHandle() {
    this.setState({hovering: false})
  }
  onMouseEnterHandle() {
    this.setState({hovering: true})
  }
  calculateInventory() {
    if (this.props.beer.transactions.length === 0 ) return 0
    return this.props.beer.transactions
      .map(((trans) => trans.type === 'adjust-up' ? trans.qty : -(trans.qty)))
      .reduce((a, b) => a + b, 0)
  }

  render() {
    const { beer, beers } = this.props
    const flex = classNames('flex-container')
    const flexItem = classNames('flex-item')
    const flexItemMain = classNames('flex-item-main')

    return (
      <Link to={`/beers/${beer._id}`}>
        <li>
          <div className={flex}>
            <div onMouseEnter={this.onMouseEnterHandle}
              onMouseLeave={this.onMouseLeaveHandle}
              className={flexItemMain}
            >
              <div className={flex}>
                <BeerDetailHeader beer={beer} />
                <div className={flexItem}>
                  <Inventory qty={this.calculateInventory()} />
                </div>
              </div>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BeerSingle
