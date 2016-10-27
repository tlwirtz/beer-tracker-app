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
      showDetail: false
    }
    this.beerClick = this.beerClick.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
    this.calculateInventory = this.calculateInventory.bind(this)
  }
  beerClick(e) {
    //TODO -- should not update state if the '-' or '+' is clicked
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

    return (<h1> A card should go here</h1>)
  }
}

export default BeerSingle
