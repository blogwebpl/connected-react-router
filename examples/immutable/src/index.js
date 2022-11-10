import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import Immutable from 'immutable'
import React from 'react'
import { createRoot } from 'react-dom/client';

import App from './App'
import configureStore, { history } from './configureStore'

const initialState = Immutable.Map()
const store = configureStore(initialState)
const container = document.getElementById('react-root');
const root = createRoot(container);
const render = () => {
  root.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })
}
