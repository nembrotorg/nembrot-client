import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
// import { ApolloClient } from 'apollo-client';
import { BrowserRouter } from 'react-router-dom'
import { createHttpLink } from 'apollo-link-http';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

import App from './App';

import './index.css';

const httpLink = createHttpLink({
  credentials: 'same-origin',
  uri: '/graphql',
});

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: httpLink,
// });

// const authLink = setContext((request, previousContext) => {
//   console.log('=>>> ', request, previousContext);
//   const token = localStorage.getItem('token');
//   return {
//     ...request,
//     headers: {
//       ...request.headers,
//       authorization: token ? `Bearer ${token}` : '',
//     }
//   }
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('authToken');

  // Use the setContext method to set the HTTP headers.
  if (!!token) {
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
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
