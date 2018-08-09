import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_VALID_TAGS_QUERY = gql`
  query AllValidTagsQuery {
    activeTags {
      totalCount
      nodes {
        activeTagsCount
        name
        slug
      }
    }
  }
`;

class Tags extends Component {

  render() {
    return (
      <Query query={ALL_VALID_TAGS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <ul>
              {data.activeTags.nodes.map((tag, index) => (
                <li key={tag.slug}>
                  <Link to={`/tags/${tag.slug}`}>{tag.name}</Link>
                  <span className="count">{tag.activeTagsCount}</span>
                </li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default Tags;
