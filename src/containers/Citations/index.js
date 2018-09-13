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
        cachedSourceHtml
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
                console.log('CIT. ', citation.id, citation.cachedBlurbHtml.split(", "));
                return (
                  <li key={citation.id}>
                    <Link to={citation.cachedUrl}>
                      <p dangerouslySetInnerHTML={{ __html: citation.cachedBlurbHtml }} />
                      <p dangerouslySetInnerHTML={{ __html: `&mdash; ${citation.cachedSourceHtml}` }} />
                    </Link>
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
