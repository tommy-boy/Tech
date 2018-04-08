import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = applyMiddleware(thunk)

const enhancer = composeWithDevTools(middleware)

const store = createStore(
  rootReducer,
  enhancer
)

export default store
