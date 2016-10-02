import React from 'react'

class BeerSingle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false
    }
    this.beerClick = this.beerClick.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
  }
  beerClick() {
    this.props.selectBeer(this.props.beer._id)
  }
  onMouseLeaveHandle() {
    this.setState({hovering: false})
  }
  onMouseEnterHandle() {
    this.setState({hovering: true})
  }
  render() {
    const { beer, beers } = this.props
    return (
      <div onClick={this.beerClick}
          onMouseEnter={this.onMouseEnterHandle}
          onMouseLeave={this.onMouseLeaveHandle}
          >

        { this.state.hovering ? <h1>HOVERING</h1> : null }
        <h2>{this.props.beer.name} </h2>
        <p>{this.props.beer._id}</p>
      </div>
    )
  }
}

export default BeerSingle
