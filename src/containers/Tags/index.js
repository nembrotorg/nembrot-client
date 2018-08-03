import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Tags extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.allValidTagsQuery.refetch()
    }
  }

  render() {
    const {
      allValidTagsQuery,
      children
    } = this.props;

    if (allValidTagsQuery.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div>
        <ul>
          {allValidTagsQuery.activeTags && allValidTagsQuery.activeTags.nodes.map((tag, index) => (
            <li key={index}>
              <Link to={`/tags/${tag.slug}`}>{tag.name}</Link> <span className="count">{tag.activeTagsCount}</span>
            </li>
          ))}
        </ul>
        {children}
      </div>
    )
  }
}

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

export default graphql(ALL_VALID_TAGS_QUERY, {
  name: 'allValidTagsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(Tags);
