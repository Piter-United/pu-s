import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
//
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import client from './connectors/apollo'
import store from './connectors/redux'

import './app.css'

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </ApolloProvider>
)

export default hot(module)(App)
