import React from 'react'
import AddBeerForm from './AddBeerForm'
import BeerList from './BeerList'
import classNames from 'classnames'

class ManageBeers extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        const level = classNames('level')
        return (
            <div>
                <div className={level}>
                    <AddBeerForm {...this.props} />
                </div>
                <BeerList {...this.props} />
            </div>
        )
    }
}

export default ManageBeers
