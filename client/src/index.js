import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/storeConfig'
import Router from './Router'
import { client } from './graphql/config.js'
import { ApolloProvider, Query } from "react-apollo"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>, document.getElementById('root'));


serviceWorker.unregister();
