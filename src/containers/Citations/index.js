import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_VALID_TEXTS_QUERY = gql`
  query AllValidCitationsQuery {
    citations {
      nodes {
        id
        cachedUrl
        cachedBlurbHtml
      }
    }
  }
`;

class Texts extends Component {

  render() {
    return (
      <Query query={ALL_VALID_TEXTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <ul>
              {data.citations.nodes.map((citation, index) => {
                if (!citation.cachedUrl) {
                  return null;
                }
                return (
                  <li key={citation.id}>
                    <Link to={citation.cachedUrl} dangerouslySetInnerHTML={{ __html: citation.cachedBlurbHtml }} />
                  </li>
                )
              })}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default Texts;
