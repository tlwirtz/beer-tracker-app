import React from 'react'
import classNames from 'classnames'
import BeerDetailHeader from './BeerDetailHeader'
import BeerTransactionList from './BeerTransactionList'


class BeerDetailContainer extends React.Component {
  constructor(props) {
    super(props)

    this.filterBeerItems.bind(this)
  }

  filterBeerItems() {
    return this.props.beers.items.filter((beer) => beer._id === this.props.params.beerId)[0]
  }

  render() {
    return (
      <div>
        { this.props.beers.fetchingBeers ?
            <h1>FETCHING BEER</h1> :
            <div>
              <BeerDetailHeader beer={this.filterBeerItems()} />
              <BeerTransactionList transactions={this.filterBeerItems().transactions} />
            </div>
        }
      </div>
    )

  }
}

export default BeerDetailContainer
