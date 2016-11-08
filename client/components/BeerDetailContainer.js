import React from 'react'
import classNames from 'classnames'
import BeerDetailHeader from './BeerDetailHeader'
import BeerTransactionList from './BeerTransactionList'
import Inventory from './Inventory'
import GraphContainer from './GraphContainer'

class BeerDetailContainer extends React.Component {
  constructor(props) {
    super(props)

    this.filterBeerItems.bind(this)
    this.calculateInventory.bind(this)
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
              <Inventory detailPage={true} qty={this.calculateInventory()} />
            </div>
            <GraphContainer />
            <BeerTransactionList transactions={this.filterBeerItems().transactions} />
          </div>
        }
      </div>
    )

  }
}

export default BeerDetailContainer
