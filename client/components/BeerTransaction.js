import React from 'react'
import classNames from 'classnames'

const BeerTransaction = (props) => {
  const subtitle = classNames('subtitle', 'is-5', 'level-item')
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const level = classNames('level', 'is-mobile')
  const levelItem = classNames('level-item')
  const levelLeft = classNames('level-left')
  const levelRight = classNames('level-right')
  const icon = classNames('icon')
  const arrow = classNames({
    'fa': true,
    'fa-arrow-up': props.transaction.type === 'adjust-up',
    'fa-arrow-down': props.transaction.type === 'adjust-down'
  })
  return (
    <div className={level}>
      <div className={levelLeft}>
        <p className={subtitle}>{new Date(props.transaction.dateTime).toLocaleDateString('en-US', options)}</p>
      </div>
      <div className={levelRight}>
        <div className={levelItem}>
          <span className={icon}>
            <i className={arrow}></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BeerTransaction
