import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_VALID_LINKS_QUERY = gql`
  query AllValidLinksQuery {
    links {
      nodes {
        id
        cachedHeadline
        cachedUrl
        cachedBlurbHtml
        cachedSourceHtml
      }
    }
  }
`;

class Links extends Component {

  render() {
    return (
      <Query query={ALL_VALID_LINKS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <ul>
              {data.links.nodes.map((link, index) => {
                if (!link.cachedUrl) {
                  return null;
                }
                return (
                  <li key={link.id}>
                    <Link to={link.cachedUrl}>
                      <p dangerouslySetInnerHTML={{ __html: link.cachedHeadline }} />
                      <p dangerouslySetInnerHTML={{ __html: link.cachedBlurbHtml }} />
                      <p dangerouslySetInnerHTML={{ __html: `&mdash; ${link.cachedSourceHtml}` }} />
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

export default Links;
