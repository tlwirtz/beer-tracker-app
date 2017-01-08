import React from 'react'
import classNames from 'classnames'
import Graph from './Graph'

class GraphContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const container = classNames('graph-container')
    return (
      <div className={container}>
        <Graph />
        <Graph />
      </div>
    )
  }
}

export default GraphContainer
