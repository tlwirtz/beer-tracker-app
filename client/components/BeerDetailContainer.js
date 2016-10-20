import React from 'react'
import classNames from 'classnames'
import BeerDetailHeader from './BeerDetailHeader'


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
            <BeerDetailHeader beer={this.filterBeerItems()} /> }
      </div>
    )

  }
}

export default BeerDetailContainer
