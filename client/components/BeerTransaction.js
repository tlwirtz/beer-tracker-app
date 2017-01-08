import React from 'react'
import classNames from 'classnames'

const BeerTransaction = (props) => {
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const transDate = new Date(props.transaction.dateTime).toLocaleDateString('en-US', options)
  const icon = classNames('icon', 'text-center')
  const arrow = classNames({
    'fa': true,
    'fa-arrow-up': props.transaction.type === 'adjust-up',
    'beer-tracker-green': props.transaction.type === 'adjust-up',
    'fa-arrow-down': props.transaction.type === 'adjust-down',
    'beer-tracker-red': props.transaction.type === 'adjust-down'
  })

  const flex = classNames('flex-container')
  const flexItem = classNames('flex-item')
  const flexItemMain = classNames('flex-item-main', 'transaction')
  const subheading = classNames('small-margin', 'text-light', 'text-center')


  return (
    <li>
      <div className={flex}>
        <div className={flexItemMain}>
          <div className={flex}>
            <div className={flexItem}>
              <p className={subheading}>{transDate}</p>
            </div>
            <div className={flexItem}>
              <p className={subheading}>{props.transaction.type}</p>
            </div>
            <div className={flexItem}>
              <p className={subheading}>{props.transaction.qty}</p>
            </div>
            <div className={flexItem}>
              <p className={icon}><span className={arrow}></span></p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default BeerTransaction
