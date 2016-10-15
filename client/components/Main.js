import App from 'grommet/components/App';
import Heading from 'grommet/components/Heading';

import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classes = classNames({
      main: 'true'
    })
    return (
      <App>
        <div className={classes}>
          <h1>BEER TRACKER</h1>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </App>
    )
  }
}

export default Main
