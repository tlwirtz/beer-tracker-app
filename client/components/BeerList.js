import React from 'react'
import BeerSingle from './BeerSingle'

class BeerList extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ul>
        { this.props.beers.fetchingBeers ?
          <li><h2>Loading Beers</h2></li>:
          this.props.beers.items.map((beer) =>
            <BeerSingle
                key={beer._id}
                beer={beer}
                {...this.props}/>
              )
        }
        </ul>
      </div>
    )
  }
}

export default BeerList
