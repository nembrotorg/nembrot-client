import React, { Component } from 'react';
// import '../node_modules/graphiql/graphiql.css'
// import GraphiQL from 'graphiql';
// import { parse } from 'graphql';

// import { execute } from 'apollo-link';
// import { HttpLink } from 'apollo-link-http';
//
// const link = new HttpLink({
//   uri: 'http://localhost:5000/graphql'
// });
//
// const fetcher = (operation) => {
//   operation.query = parse(operation.query);
//   return execute(link, operation);
// };

class Api extends Component {

  render() {
    return (
      <p>API</p>
      // <GraphiQL fetcher={fetcher}/>
    );
  }
}

export default Api;
