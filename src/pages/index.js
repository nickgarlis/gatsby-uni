import React from 'react';
import {Header} from 'semantic-ui-react';
import Events from '../components/Events';

const IndexPage = ({data}) => {
  const events = data.allMarkdownRemark.edges;
  return (
    <div>
      <Header as="h1">
        Welcome to Gatsby Uni
        <Header.Subheader>
          A flexible Gatsby theme meant to be used by universities.
        </Header.Subheader>
      </Header>
      <Events events={events} />
    </div>
  );
};

export default IndexPage;

// TODO: Move events to the end of the list when they are over
export const eventsQuery = graphql`
  query EventsIndexQuery {
    allMarkdownRemark(
      limit: 4
      filter: {
        fields: {collection: {eq: "events"}}
        frontmatter: {date: {ne: null}}
      }
      sort: {fields: [frontmatter___date], order: ASC}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "dddd DD MMMM YYYY")
            description
            image
          }
        }
      }
    }
  }
`;
