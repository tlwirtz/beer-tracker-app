import React from 'react'
import classNames from 'classnames'
import BeerDetailHeader from './BeerDetailHeader'
import BeerTransactionList from './BeerTransactionList'
import Inventory from './Inventory'
import GraphContainer from './GraphContainer'
import AddInventory from './AddInventory'
import RemoveInventory from './RemoveInventory'
import BeerGraph from './BeerGraph'

class BeerDetailContainer extends React.Component {
  constructor(props) {
    super(props)

    this.filterBeerItems.bind(this)
    this.calculateInventory.bind(this)
    this.formatForGraph.bind(this)
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
    //THIS IS SUPER UGLY -- FUNCTIONALIZE!
    const beer = this.filterBeerItems();

    const posOrNeg = (item) => {
      return item.type === 'adjust-up' ? item.qty : -(item.qty)
    }

    const totalDailyTrans = (dailyTrans, trans) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const transDate = new Date(trans.dateTime).toLocaleDateString('en-US', options)
      dailyTrans[transDate] ? dailyTrans[transDate] += posOrNeg(trans) : dailyTrans[transDate] = posOrNeg(trans)
      return dailyTrans
    }

    const dailyTransactions = beer.transactions.reduce(totalDailyTrans, {})
    
    Object.keys(dailyTransactions).reduce((inventory, key) => {
      inventory += dailyTransactions[key]
      dailyTransactions[key] = inventory
      return inventory
    }, 0)

    const finalInventory = Object.keys(dailyTransactions).reduce((inventory, key) => {
        console.log('inventory', inventory)
        inventory.push({date: key, qty: dailyTransactions[key]})
        return inventory
    }, [])

    console.log(finalInventory)
    return finalInventory
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
