import React from 'react'
import classNames from 'classnames'
import {addBeerReq} from '../actions/actionCreators'

class AddBeerForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.inputNameChange = this.inputNameChange.bind(this)
    this.state = {
      newBeer: {name: null}
    }
  }

  handleClick() {
    this.props.addBeerReq(this.state.newBeer)
  }

  inputNameChange(e) {
    const newState = this.state.newBeer.name = e.target.value
    this.setState({ newState })
  }

  render() {

    const controlGroup = classNames('control', 'is-grouped', 'content', 'beerForm')
    const control = classNames('control')
    const input = classNames('input')
    const button = classNames('button', 'is-info')
    return (
      <div className={controlGroup}>
        <p className={control}>
          <input className={input} onChange={this.inputNameChange} type="text" placeholder="Enter Beer Name" />
        </p>
        <p className={control}>
          <a className={button} onClick={this.handleClick}>Add Beer</a>
        </p>
      </div>
    )
  }
}

export default AddBeerForm
