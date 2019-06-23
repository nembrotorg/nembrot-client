import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { UserContext } from '../helpers/UserContext';

const ALL_VALID_TEXTS_QUERY = gql`
  query AllValidTextsQuery {
    texts {
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
      <div>
        <UserContext.Consumer>
          {({user}) => user.role}
        </UserContext.Consumer>
        <Query query={ALL_VALID_TEXTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return (
              <ul>
                {data.texts.nodes.map((text, index) => (
                    <li key={text.id}>
                      <Link to={text.cachedUrl} dangerouslySetInnerHTML={{ __html: text.cachedBlurbHtml }} />
                    </li>
                  )
                )}
              </ul>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Texts;
