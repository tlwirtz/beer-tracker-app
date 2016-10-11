import React  from 'react'
import classNames from 'classnames'

const Inventory = (props) => {
  const classes = classNames({
    'inventoryQty': true,
    'lowInventory': props.qty < 3,
    'flex': true
  })

  const flex = classNames({
    'beerSingle-inventory':true
  })
  return <div className={flex}><h2 className={classes}>{props.qty}</h2></div>
}

export default Inventory
