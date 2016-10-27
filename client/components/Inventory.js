import React  from 'react'
import classNames from 'classnames'

const Inventory = (props) => {
  const classes = classNames({
    'lowInventory': props.qty < 3,
    'title': true,
    'inventory': true,
    'has-text-centered': true
  })
  return <h1 className={classes}>{props.qty}</h1>
}

export default Inventory
