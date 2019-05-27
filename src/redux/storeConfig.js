import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
})

export const Store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)