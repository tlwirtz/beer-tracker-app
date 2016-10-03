import React from 'react'
import classNames from 'classnames'
import Inventory from './Inventory'

class BeerSingle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false
    }
    this.beerClick = this.beerClick.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
    this.calculateInventory = this.calculateInventory.bind(this)
  }
  beerClick() {
    this.props.selectBeer(this.props.beer._id)
  }
  onMouseLeaveHandle() {
    this.setState({hovering: false})
  }
  onMouseEnterHandle() {
    this.setState({hovering: true})
  }
  calculateInventory() {
    console.log('processing inventory', this.props.beer.transactions)
    if (this.props.beer.transactions.length === 0 ) return 0
    return this.props.beer.transactions
      .map(((trans) => trans.type === 'adjust-up' ? trans.qty : -(trans.qty)))
      .reduce((a, b) => a + b, 0)
  }
  render() {
    const { beer, beers } = this.props
    let classes = classNames({
      'beerSingle': true,
      'hovering': this.state.hovering,
      'beerSingleSelected': beers.selectedBeer === beer._id
    })

    return (
      <div onClick={this.beerClick}
          onMouseEnter={this.onMouseEnterHandle}
          onMouseLeave={this.onMouseLeaveHandle}
          className={classes}
          >
        <h2>{this.props.beer.name} </h2>
        <p>{this.props.beer._id}</p>
        <Inventory qty={this.calculateInventory()} />
      </div>
    )
  }
}

export default BeerSingle
