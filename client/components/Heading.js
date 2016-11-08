import React from 'react'
import classNames from 'classnames'

const Heading = (props) => {
  const header = classNames('transaction')
  const flexTitle = classNames('flex-title')
  const container = classNames('flex-container')
  const heading = classNames('inventory-headings', 'small-margins')
  
  return (
  <div className={container}>
    <div className={header}>
      <div className={flexTitle}>
        <h2 className={heading}>{props.text}</h2>
      </div>
    </div>
  </div>
  )
}

export default Heading
