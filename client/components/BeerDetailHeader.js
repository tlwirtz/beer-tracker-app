import React from 'react'
import classNames from 'classnames'
import RemoveInventory from './RemoveInventory'
import Inventory from './Inventory'
import AddInventroy from './AddInventory'

const BeerDetailHeader = (props) => {
  const levelItem = classNames('level-item')
  const beerSingleTitle = classNames('title')

  return (
    <div className={levelItem}>
      <h2 className={beerSingleTitle}>{props.beer.name}</h2>
      <p>{props.beer._id}</p>
    </div>
  )
}

export default BeerDetailHeader
