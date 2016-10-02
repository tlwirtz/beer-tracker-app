import React from 'react'
import Box from 'grommet/components/Box'

const BeerSingle = (props) => (
  <li>
    <Box>
      {props.beer.name} -- {props.beer._id}
    </Box>
  </li>
)
export default BeerSingle
