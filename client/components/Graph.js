import React from 'react'
import classNames from 'classnames'

const Graph = (props) => {
  const graph = classNames('graph', 'placeholder-box')
  return (
    <div className={graph}>
      <p>graph</p>
    </div>
  )
}

export default Graph
