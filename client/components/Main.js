import 'grommet/scss/vanilla/index.scss';
import App from 'grommet/components/App';
import Heading from 'grommet/components/Heading';

import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <App>
        <div>
          <h1>BEER TRACKER</h1>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </App>
    )
  }
});

export default Main
