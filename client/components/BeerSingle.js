import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import Inventory from './Inventory'
import AddInventory from './AddInventory'
import RemoveInventory from './RemoveInventory'
import BeerDetailHeader from './BeerDetailHeader'
import BeerTransactionList from './BeerTransactionList'

class BeerSingle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false,
      showDetail: false
    }
    this.beerClick = this.beerClick.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
    this.calculateInventory = this.calculateInventory.bind(this)
  }
  beerClick() {
    this.props.selectBeer(this.props.beer._id)
    this.setState({showDetail: !this.state.showDetail})
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
    const boxClass = classNames({
      'hovering': this.state.hovering,
      'beerSingleSelected': beers.selectedBeer === beer._id,
      'box': true,
      'beerListSingle': true
    })

    const levelMain = classNames('level')
    const levelItem = classNames('level-item')
    const levelLeft = classNames('level-left')
    const levelRight = classNames('level-right')

    return (
        <div className="container">
          <div onClick={this.beerClick}
              onMouseEnter={this.onMouseEnterHandle}
              onMouseLeave={this.onMouseLeaveHandle}
              className={boxClass}
              >
              <div className={levelMain}>
                <div className={levelLeft}>
                  <BeerDetailHeader beer={beer}/>
                </div>
                <div className={levelRight}>
                  <div className={levelItem}>
                    <RemoveInventory  beer={beer} {...this.props} />
                    </div>
                    <div className={levelItem}>
                    <Inventory qty={this.calculateInventory()} />
                    </div>
                    <div className={levelItem}>
                    <AddInventory  beer={beer} {...this.props} />
                    </div>
                </div>
              </div>
              {
                this.state.showDetail ?
                <div>
                  <BeerTransactionList transactions={beer.transactions.slice(0, 10)}/>
                </div> : null
              }
          </div>
        </div>
    )
  }
}

export default BeerSingle
