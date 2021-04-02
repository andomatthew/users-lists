import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


const initialState = {
  personnels: [],
  loading: false
}

function allReducers(state = initialState, actions) {
  switch(actions.type) {
    case 'SET_PERSONNELS' :
      return { ...state, personnels: actions.personnels }
    case 'SET_LOADING':
      return { ...state, loading: actions.status}
    default :
      return state
  }
} 

const store = createStore(allReducers, applyMiddleware(thunk))

export default store