import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import PeopleList from '../components/PeopleList';

const People = ({data, location}) => {
  const people = data.allMarkdownRemark.edges;
  return (
    <Layout location={location}>
      <PeopleList people={people} />
    </Layout>
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
