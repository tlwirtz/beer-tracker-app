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
          <li>Loading Beers</li> :
          this.props.beers.items.map((beer) => <BeerSingle
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
