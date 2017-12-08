import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Texts extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.allNotesQuery.refetch()
    }
  }

  render() {
    if (this.props.allNotesQuery.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    let blurClass = ''
    if (this.props.location.pathname !== '/') {
      blurClass = ' blur'
    }

    return (
      <div>
        <ul>
          {this.props.allNotesQuery.allNotes && this.props.allNotesQuery.allNotes.nodes.map(text => (
            <li><Link to={`/texts/${text.id}`}>{text.title}</Link></li>
          ))}
        </ul>
        {this.props.children}
      </div>
    )
  }
}

const ALL_NOTES_QUERY = gql`
  query AllNotesQuery {
    allNotes(orderBy: UPDATED_AT_DESC) {
      nodes {
        id
        title
      }
    }
  }
`;

export default graphql(ALL_NOTES_QUERY, {
  name: 'allNotesQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(Texts);
