import React from 'react'
import AddBeerForm from './AddBeerForm'
import classNames from 'classnames'

class ManageBeers extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        const content = classNames('content')
        const container = classNames('container', 'is-fluid')
        return (
            <div className={container}>
                <div className={content}>
                    <AddBeerForm {...this.props}/>
                </div>
            </div>
        )
    }
}

export default ManageBeers
