import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import configureStore, { history } from './configureStore'

const store = configureStore()
const render = () => {
  const container = document.getElementById('react-root');
  const root = createRoot(container);

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
