import React from 'react'
import { VictoryChart, VictoryLine, VictoryLabel, VictoryScatter } from 'victory'

class BeerGraph extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <VictoryLine width={800} height={175} interpolation="linear" data={this.props.beerData || [{date: Date.now(), qty: 0}]} x="date" y={(datum) => datum.qty} />
    )

  }
}

export default BeerGraph
