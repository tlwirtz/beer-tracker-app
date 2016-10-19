import React  from 'react'
import classNames from 'classnames'

const Inventory = (props) => {
  const classes = classNames({
    'lowInventory': props.qty < 3,
    'subtitle': true,
    'is-2': true
  })
  return <h2 className={classes}>{props.qty}</h2>
}

export default Inventory
