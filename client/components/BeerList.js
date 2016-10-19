import React from 'react'
import BeerSingle from './BeerSingle'

class BeerList extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        { this.props.beers.fetchingBeers ?
          <h2>Loading Beers</h2> :
          this.props.beers.items.map((beer) =>
          <BeerSingle
                key={beer._id}
                beer={beer}
                {...this.props}/>
              )
        }
      </div>
    )
  }
}

export default BeerList
