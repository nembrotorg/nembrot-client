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
    if (this.props.allValidTagsQuery.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div>
        <ul>
          {this.props.allValidTagsQuery.allActiveTags && this.props.allValidTagsQuery.allActiveTags.nodes.map((tag, index) => (
            <li key={index}>
              <Link to={`/tags/${tag.slug}`}>{tag.name}</Link> <span className="count">{tag.activeTagsCount}</span>
            </li>
          ))}
        </ul>
        {this.props.children}
      </div>
    )
  }
}

const ALL_VALID_TAGS_QUERY = gql`
  query AllValidTagsQuery {
    allActiveTags {
      totalCount
      nodes {
        name
        slug
        activeTagsCount
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
