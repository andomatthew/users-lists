import axios from 'axios'

const personnelsStorageKey = 'personnels'
const randomUserAPI = 'https://randomuser.me/api/?results=28'

export function setPersonnels(personnels) {
  return function (dispatch) {
    dispatch({ type: 'SET_PERSONNELS', personnels })
  }
}

export function setLoading(status) {
  return function (dispatch) {
    dispatch({ type: 'SET_LOADING', status })
  }
}

export function fetchPersonnels() {
  return function (dispatch) {
    dispatch(setLoading(true))
    if(!localStorage.getItem(personnelsStorageKey)) {
      axios.get(randomUserAPI)
      .then(({data}) => {
        localStorage.setItem(personnelsStorageKey, JSON.stringify(data.results))
        dispatch(setPersonnels(data.results))
      })
      .catch(err => console.log(err))
      .finally(_ => dispatch(setLoading(false)))
    } else {
      dispatch(setPersonnels(JSON.parse(localStorage.getItem(personnelsStorageKey))))
      dispatch(setLoading(false))
    }
  }
}