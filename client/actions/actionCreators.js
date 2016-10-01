import fetch from 'isomorphic-fetch'


export const ADD_BEER = 'ADD_BEER'
export const FETCH_BEER_LIST = 'FETCH_BEER_LIST'
export const FETCH_BEER_LIST_SUCCESS = 'FETCH_BEER_LIST_SUCCESS'
export const FETCH_BEER_LIST_FAILURE = 'FETCH_BEER_LIST_FAILURE'

export const addBeer = (beer) => (
  {
    type: ADD_BEER,
    beer
  }
)

export const fetchBeerList = () => (
  {
    type: FETCH_BEER_LIST
  }
)

export const fetchBeerListSuccess = (res) => (
  {
    type: FETCH_BEER_LIST_SUCCESS,
    beers: res.body
  }
)

export const fetchBeerListFailure = (err) => (
  {
    type: FETCH_BEER_LIST_FAILURE,
    error: err
  }
)

export const fetchBeers = () => (
  (dispatch) => {
    dispatch(fetchBeerList())
    return fetch(`${process.env.BEER_TRACKER_API}/beers`)
    .then((response) => response.json())
    .then((json) => dispatch(fetchBeerListSuccess(json)))
    .catch((err) => dispatch(fetchBeerListFailure(err)))
  }
)
