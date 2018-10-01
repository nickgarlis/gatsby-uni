import React from 'react';
import PeopleList from '../components/PeopleList';

const People = ({data}) => {
  const people = data.allMarkdownRemark.edges;
  return (
    <div>
      <PeopleList people={people} />
    </div>
  );
};

export default People;

export const peopleQuery = graphql`
  query PeopleIndexQuery {
    allMarkdownRemark(
      filter: {fields: {collection: {eq: "people"}}}
      sort: {fields: [frontmatter___rank, frontmatter___name], order: ASC}
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            image
            rank
          }
        }
      }
    }
  }
`;
