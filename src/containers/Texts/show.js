import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Text extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.NoteQuery.refetch()
    }
  }

  render() {
    if (this.props.NoteQuery.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    if (this.props.NoteQuery.error) {
      console.error('ERROR!!!', this.props.NoteQuery);
      return (
        <div>
          Error!
        </div>
      )
    }
    return (
      <div>
        <h1>{this.props.NoteQuery.noteById.title}</h1>
        {this.props.children}
      </div>
    )
  }
}

const NOTE_QUERY = gql`
  query NoteQuery($noteId: Int!) {
    noteById (id: $noteId) {
      id
      title
      wordCount
    }
  }
`;

const ComponentWithQuery = graphql(NOTE_QUERY, {
  name: 'NoteQuery',
  options: ({ match }) => ({
    fetchPolicy: 'network-only',
    variables: {
      noteId: match.params.id,
    },
  }),
})(Text);

export default withRouter(ComponentWithQuery);
