import React from 'react'
import AddBeerForm from './AddBeerForm'

class ManageBeers extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <div>
                <h1> MANAGING BEERS</h1>
                <ol>
                    <li>Display beers -- click brings to beer detail page</li>
                    <li>Form for New Beers</li>
                    <li>Link action to creat Beers</li>
                </ol>
                <AddBeerForm {...this.props}/>
            </div>
        )
    }
}

export default ManageBeers
