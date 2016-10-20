import React from 'react'
import classNames from 'classnames'

const BeerStatsContainer = () => {
  const title = classNames('title', 'is-2')
  const subtitle = classNames('subtitle', 'is-4')
  const margin = classNames('margin')

  return (
    <div className={margin}>
      <h1 className={title}>Beer Stats</h1>
      <h2 className={subtitle}>Display total beers, most popular beer, beers consumed. Move the beer list to the beers route.</h2>
    </div>
  )
}

export default BeerStatsContainer
