import React from 'react'

class UpdateButton extends React.Component{
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.sendInventoryTrans(this.props.beer, 1)
  }

  render() {
    return (
      <div>
        <button key={this.props.beer._id}
          onClick={this.handleClick}>
          update
        </button>
        </div>
    )
  }
}

export default UpdateButton
