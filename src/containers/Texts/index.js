import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_VALID_TEXTS_QUERY = gql`
  query AllValidTextsQuery {
    activeNotes {
      nodes {
        id
        title
        role
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
              {data.activeNotes.nodes.map((text, index) => (
                <li key={text.id}>
                  <Link to={`/texts/${text.id}`}>{text.title} | {text.role}</Link>
                </li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default Texts;
