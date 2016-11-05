import React from 'react'
import classNames from 'classnames'
import RemoveInventory from './RemoveInventory'
import Inventory from './Inventory'
import AddInventroy from './AddInventory'

const BeerDetailHeader = (props) => {
  const flexTitle = classNames('flex-title')
  const heading = classNames('small-margin', 'inventory-headings')
  const subheading = classNames('small-margin', 'text-light')

  return (
    <div className={flexTitle}>
      <h1 className={heading}>{props.beer.name}</h1>
      <p className={subheading}>{props.beer._id}</p>
    </div>
  )
}

export default BeerDetailHeader
