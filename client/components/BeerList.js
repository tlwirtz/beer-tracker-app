import React from 'react'

const BeerList = React.createClass({
  render() {
    return (
      <div>
        { this.props.beers.fetchingBeers ?
          <p>Loading Beers</p> :
          this.props.beers.items.map((beer) => <p key={beer._id}>{beer.name} -- {beer._id}</p>)
        }
      </div>
    )
  }
});

export default BeerList
