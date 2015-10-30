import { createStore } from 'redux'
import todosReducer from '../reducers'

export default function configStore(initialState) {
  const store = createStore(todosReducer, initialState)
  
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }
  
  return store
}