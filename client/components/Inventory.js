import React  from 'react'
import classNames from 'classnames'

const Inventory = (props) => {
  const inventory = classNames({
    'lowInventory': props.qty < 3,
    'inventory-headings': true
  })
  const inventoryBox = classNames('flex-inventory-container', 'flex-row')
  const auto = classNames('flex-auto')

  return (
    <div>
      {
        props.detailPage ? <h2>{props.qty}</h2>
        :
        <div className={inventoryBox}>
          <div className={auto}></div>
          <h1 className={inventory}>{props.qty}</h1>
          <div className={auto}></div>
        </div>
      }
    </div>
  )
}

export default Inventory
