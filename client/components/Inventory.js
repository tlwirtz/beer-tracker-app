import React  from 'react'
import classNames from 'classnames'

const Inventory = (props) => {
  const classes = classNames({
    inventoryQty: true,
    lowInventory: props.qty < 3,
  })
  return <h2 className={classes}>{props.qty}</h2>
}

export default Inventory
