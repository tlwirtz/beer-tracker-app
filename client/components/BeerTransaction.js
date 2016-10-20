import React from 'react'
import classNames from 'classnames'

const BeerTransaction = (props) => {
  return (
    <li>{JSON.stringify(props.transaction)}</li>
  )
}

export default BeerTransaction
