import React from 'react'
import BeerSingle from './BeerSingle'

const BeerList = React.createClass({
  render() {
    return (
      <div>
        { this.props.beers.fetchingBeers ?
          <p>Loading Beers</p> :
          this.props.beers.items.map((beer) => <BeerSingle key={beer._id} beer={beer} />)
        }
      </div>
    )
  }
});

export default BeerList
