import React from 'react'
import BeerSingle from './BeerSingle'

const BeerList = React.createClass({
  render() {
    return (
      <div>
        <ul>
        { this.props.beers.fetchingBeers ?
          <li>Loading Beers</li> :
          this.props.beers.items.map((beer) => <BeerSingle key={beer._id} beer={beer} />)
        }
        </ul>
      </div>
    )
  }
});

export default BeerList
