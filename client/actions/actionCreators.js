import fetch from 'isomorphic-fetch'

export const ADD_BEER = 'ADD_BEER'
export const ADD_BEER_SUCCESS = 'ADD_BEER_SUCCESS'
export const ADD_BEER_FAILURE = 'ADD_BEER_FAILURE'
export const SELECT_BEER = 'SELECT_BEER'
export const FETCH_BEER_LIST = 'FETCH_BEER_LIST'
export const FETCH_BEER_LIST_SUCCESS = 'FETCH_BEER_LIST_SUCCESS'
export const FETCH_BEER_LIST_FAILURE = 'FETCH_BEER_LIST_FAILURE'
export const ADD_INVENTORY_TRANSACTION = 'ADD_INVENTORY_TRANSACTION'
export const ADD_INVENTORY_TRANSACTION_FAILURE = 'ADD_INVENTORY_TRANSACTION_FAILURE'
export const ADD_INVENTORY_TRANSACTION_SUCCESS = 'ADD_INVENTORY_TRANSACTION_SUCCESS'
export const DELETE_BEER = 'DELETE_BEER'
export const DELETE_BEER_SUCCESS = 'DELETE_BEER_SUCCESS'
export const DELETE_BEER_FAILURE = 'DELETE_BEER_FAILURE'

const defaultOpts = () => (Object.assign({},
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
))

export const deleteBeer = (beerId) => (
  {
    type: DELETE_BEER,
    beerId
  }
)

export const deleteBeerSuccess = (beerId) => (
  {
    type: DELETE_BEER_SUCCESS,
    beerId
  }
)

export const deleteBeerFailure = (err) => (
  {
    type: DELETE_BEER_FAILURE,
    err
  }
)

export const addInventoryTrans = (beer, qty, transType) => (
  {
    type: ADD_INVENTORY_TRANSACTION,
    beer,
    qty,
    transType
  }
)

export const addInventoryTransSuccess = (beerId, transactions) => (
  {
    type: ADD_INVENTORY_TRANSACTION_SUCCESS,
    beerId,
    transactions
  }
)

export const addInventoryTransFail = (beerId, err) => {
  console.log(err)
  return {
    type: ADD_INVENTORY_TRANSACTION_FAILURE,
    beerId,
    err
  }
}

export const selectBeer = (beer) => (
  {
    type: SELECT_BEER,
    beer
  }
)

export const addBeer = (beer) => (
  {
    type: ADD_BEER,
    beer
  }
)

export const addBeerSuccess = (beer) => (
  {
    type: ADD_BEER_SUCCESS,
    beer
  }
)

export const addBeerFailuire = (err) => (
  {
    type: ADD_BEER_FAILURE,
    error: err
  }
)

export const fetchBeerList = () => (
  {
    type: FETCH_BEER_LIST
  }
)

export const fetchBeerListSuccess = (beers) => {
  return {
    type: FETCH_BEER_LIST_SUCCESS,
    beers
  }
}

export const fetchBeerListFailure = (err) => (
  {
    type: FETCH_BEER_LIST_FAILURE,
    error: err
  }
)

export const sendInventoryTrans = (beer, qty) => (
  (dispatch) => {
    const opts = defaultOpts()
    opts.method = 'POST'
    opts.body = JSON.stringify({
      type: qty >= 0 ? 'adjust-up' : 'adjust-down',
      qty: Math.abs(qty)
    })

    dispatch(addInventoryTrans(beer, qty, qty >= 0 ? 'adjust-up' : 'adjust-down'))
    return fetch(
      `${process.env.BEER_TRACKER_API}/api/beer/${beer._id}/transaction`,
      opts
    )
    .then((response) => response.json())
    .then((newBeer) => dispatch(addInventoryTransSuccess(newBeer._id, newBeer.transactions)))
    .catch((err) => dispatch(addInventoryTransFail(beer._id, err)))
  }
)

export const deleteBeerReq = (beerId) => (
  (dispatch) => {
    const opts = defaultOpts()
    opts.method = 'DELETE'

    dispatch(deleteBeer(beerId))
    return fetch(`${process.env.BEER_TRACKER_API}/api/beer/${beerId}`, opts)
    .then((response) => dispatch(deleteBeerSuccess(beerId)))
    .catch((err) => dispatch(deleteBeerFailure(err)))
  }
)

export const fetchBeers = () => (
  (dispatch) => {
    dispatch(fetchBeerList())
    return fetch(`${process.env.BEER_TRACKER_API}/api/beer`)
    .then((response) => response.json())
    .then((json) => dispatch(fetchBeerListSuccess(json)))
    .catch((err) => dispatch(fetchBeerListFailure(err)))
  }
)

export const addBeerReq = (beer) => (
  (dispatch) => {
    const opts = defaultOpts()
    opts.method = 'POST'
    opts.body = JSON.stringify(beer)

    dispatch(addBeer(beer))
    return fetch(`${process.env.BEER_TRACKER_API}/api/beer`, opts)
    .then((response) => response.json())
    .then((json) => dispatch(addBeerSuccess(json)))
    .catch((err) => dispatch(addBeerFailuire(err)))
  }
)
