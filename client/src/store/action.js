import axios from 'axios'

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
    if(!localStorage.getItem('personnels')) {
      axios.get('https://randomuser.me/api/?results=28')
      .then(({data}) => {
        localStorage.setItem('personnels', JSON.stringify(data.results))
        dispatch(setPersonnels(data.results))
      })
      .catch(err => console.log(err))
      .finally(_ => dispatch(setLoading(false)))
    } else {
      dispatch(setPersonnels(JSON.parse(localStorage.getItem('personnels'))))
      dispatch(setLoading(false))
    }
  }
}