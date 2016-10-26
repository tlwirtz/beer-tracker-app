import React from 'react'
import classNames from 'classnames'

const BeerTransaction = (props) => {
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const transDate = new Date(props.transaction.dateTime).toLocaleDateString('en-US', options)
  const level = classNames('level', 'is-mobile')
  const heading = classNames('heading')
  const subtitle = classNames('subtitle')
  const levelItem = classNames('level-item')
  const levelItemCentered = classNames('level-item', 'has-text-centered')
  const levelRight = classNames('level-right', 'has-text-centered')
  const icon = classNames('icon')
  const arrow = classNames({
    'fa': true,
    'fa-arrow-up': props.transaction.type === 'adjust-up',
    'beer-tracker-green': props.transaction.type === 'adjust-up',
    'fa-arrow-down': props.transaction.type === 'adjust-down',
    'beer-tracker-red': props.transaction.type === 'adjust-down'
  })

  return (
    <div>
    <div className={level}>
      <div className={levelItem}>
        <p className={heading}>date</p><br />
        <p className={subtitle}>{transDate}</p>
      </div>
      <div className={levelItemCentered}>
        <p className={heading}>qty</p><br />
        <p className={subtitle}>{props.transaction.qty}</p>
      </div>
      <div className={levelItemCentered}>
        <p className={heading}>type</p><br />
        <p className={subtitle}>{props.transaction.type}</p>
      </div>
      <div className={levelRight}>
        <p className={subtitle}>
        <span className={icon}>
            <i className={arrow}></i>
          </span></p>
      </div>
    </div>
    <hr />
    </div>
  )
}

export default BeerTransaction
