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
    this.refs.beer.value = ''
    const newState = this.state.newBeer.name = null;
    this.setState({ newState })
  }

  inputNameChange(e) {
    const newState = this.state.newBeer.name = e.target.value
    this.setState({ newState })
  }

  render() {
    const flex = classNames('flex-container')
    const button = classNames('add-beer')
    return (
      <div className={flex}>
        <p >
          <input ref="beer" onChange={this.inputNameChange} type="text" placeholder="Enter Beer Name" />
        </p>
        <p>
          <button  className={button} onClick={this.handleClick}>Add Beer</button>
        </p>
      </div>
    )
  }
}

export default AddBeerForm
