import React from 'react'
import classNames from 'classnames'

const BeerTransaction = (props) => {
  const subtitle = classNames('subtitle', 'is-5')
  const hr = classNames('is-marginless')
  return (
      <p className={subtitle}>{JSON.stringify(props.transaction)}</p>
  )
}

export default BeerTransaction
