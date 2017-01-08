import React from 'react'
import classNames from 'classnames'
import BeerDetailHeader from './BeerDetailHeader'
import BeerTransactionList from './BeerTransactionList'
import Inventory from './Inventory'
import GraphContainer from './GraphContainer'
import AddInventory from './AddInventory'
import RemoveInventory from './RemoveInventory'
import BeerGraph from './BeerGraph'
import DeleteBeer from './DeleteBeer'

import * as R from 'ramda'

class BeerDetailContainer extends React.Component {
  constructor(props) {
    super(props)

    this.filterBeerItems = this.filterBeerItems.bind(this)
    this.calculateInventory = this.calculateInventory.bind(this)
    this.formatForGraph = this.formatForGraph.bind(this)
  }

  filterBeerItems() {
    return this.props.beers.items.filter((beer) => beer._id === this.props.params.beerId)[0]
  }

  calculateInventory() {
    const beer = this.filterBeerItems();
    if (beer.transactions.length === 0 ) return 0
    return beer.transactions
      .map(((trans) => trans.type === 'adjust-up' ? trans.qty : -(trans.qty)))
      .reduce((a, b) => a + b, 0)
  }

  formatForGraph() {
    const beer = this.filterBeerItems();

  /**
   * TODO -- most of thi should go into a helper library.
   * This is a lot of functional programming...
   * Is this good practice? Could be hell to maintain later...
   */

    //const format date
    const formatDate = R.curry((options, date) => new Date(date).toLocaleDateString('en-US', options))
    const options = { year: 'numeric', month: 'long', day: 'numeric'}
    const transformDate = { dateTime: formatDate(options) }

    //const sort by dates
    const sortByDate = R.sortBy(R.prop('dateTime'))
    const groupByDate = R.groupBy(R.prop('dateTime'))

    // filter out the adjust downs and adjust up
    // might also consider a `group by`
    const filterAdjDown = R.propEq('type', 'adjust-down')
    const filterAdjUp = R.propEq('type', 'adjust-up')
    const adjDown = R.compose(R.map(R.evolve({ qty: R.negate })), R.filter(filterAdjDown))
    const adjUp = R.filter(filterAdjUp)
    const transformQty = (list) => R.concat(adjDown(list), adjUp(list))

    //negate adjust down, sort by date, transform to short date
    const sanitizeTransactions =  R.compose(
      R.map(R.evolve(transformDate)),
      sortByDate,
      transformQty
    )

    // transform into the final format we require for the graph
    const reduceQty = (accum, obj) => R.add(accum, R.prop('qty', obj))
    const calcDailyTransactions = R.map(R.reduce(reduceQty, 0))
    const dailyInventory = R.compose(R.drop(1), R.scan(R.add, 0), R.values)
    const mergeDailyInventory = R.compose(R.zipObj, R.keys)

    //sanitize, group by date, add up transaction qtys
    const sanitizeAndCalc = R.compose(
      calcDailyTransactions,
      groupByDate,
      sanitizeTransactions
    )

    //calculate how much was in inventory each day
    const dailyInvTotal = (transactions) => {
      return R.compose(
        mergeDailyInventory(transactions),
        dailyInventory,
      )(transactions)
    }

    const finalInventory =  R.compose(
      R.values,
      R.mapObjIndexed((value, key, obj) => ({date: key,  qty: value})),
      dailyInvTotal,
      sanitizeAndCalc
    )

    console.log(finalInventory(beer.transactions))
    return finalInventory(beer.transactions)
  }

  render() {
    const flex = classNames('flex-container')
    const headerContainer = classNames('flex-detail-header-main')
    return (
      <div>
        { this.props.beers.fetchingBeers ?
          <h1>FETCHING BEER</h1> :
          <div>
            <div className={flex}>
              <div className={headerContainer}>
                <BeerDetailHeader beer={this.filterBeerItems()} />
                <DeleteBeer beer={this.props.params.beerId} {...this.props}/>
              </div>
              <AddInventory beer={this.filterBeerItems()} {...this.props}/>
              <RemoveInventory beer={this.filterBeerItems()} {...this.props} />
              <Inventory detailPage={true} qty={this.calculateInventory()} />
            </div>
            <BeerGraph beerData={this.formatForGraph()}/>
            <BeerTransactionList transactions={this.filterBeerItems().transactions} />
          </div>
        }
      </div>
    )

  }
}

export default BeerDetailContainer
