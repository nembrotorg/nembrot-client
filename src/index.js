import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from 'apollo-boost';
import App from './App';

const httpLink = createHttpLink({
  credentials: 'same-origin',
  uri: '/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('authToken');
  if (!!token) {
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
