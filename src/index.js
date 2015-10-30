import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import App from './container/App'

const store = configStore()

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)